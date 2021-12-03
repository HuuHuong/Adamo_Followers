import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR, screenWidth } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppIcon } from '../../../components/AppIcon'
import { AppSearch } from '../../../components/AppSearch'
import { AppText } from '../../../components/AppText'
import { Detail_Category, Join_Community, Leave_Community } from '../../../services/API'
import { styles } from './styles'

export const JoinCommunity = (props: any) => {
    const { navigation } = props
    const [textFilter, setTextFilter] = useState('')
    const [dataDetail, setDataDetail] = useState()
    const inforCommunity = useSelector((store: any) => store.COMMUNITIES.communityForum)
    const [isJoined, setIsJoined] = useState<Boolean>(false)
    useEffect(() => {
        const detailCategory = async () => {
            try {
                const response = await Detail_Category(inforCommunity?.id)
                setDataDetail(response.data.data.communities.data)
            } catch (error) {
                console.error({ error });
            }
        }
        detailCategory()
    }, [])
    console.log(inforCommunity.id);

    const joinCommunity = async () => {
        try {
            const response = await Join_Community({ category_id: inforCommunity.id })
            console.log(response);
            setIsJoined(true)
        } catch (error) {
            console.error({ error })
        }
    }

    const leftCommunity = async () => {
        try {
            const response = await Leave_Community({ category_id: inforCommunity.id })
            console.log(response);
            setIsJoined(false)
        } catch (error) {
            console.error({ error });

        }
    }

    const listHeader = () => {
        return (
            <View style={{ marginBottom: 24 }}>
                <AppButton
                    styleBtn={{
                        marginBottom: 24,
                        marginTop: 40,
                        width: 25
                    }}
                    onPress={() => navigation.goBack()}
                    pathImage={require('../../../assets/icons/CaretLeft.png')}
                />
                <ImageBackground
                    imageStyle={{ borderRadius: 8 }}
                    style={styles.backgroundImg}
                    source={{ uri: inforCommunity.image }}
                    resizeMode={'cover'}
                >
                    <AppText styleText={styles.headingTitle}>{inforCommunity.title}</AppText>
                    <AppText styleText={styles.title}>{inforCommunity.total_members} members</AppText>
                    <AppButton
                        activeOpacity={1}
                        onPress={isJoined ? leftCommunity : joinCommunity}
                        children={!isJoined ?
                            'Participate' : 'Leaving'
                        }
                        styleBtn={[styles.btn,
                        !isJoined ? { backgroundColor: COLOR.Primary } : {
                            backgroundColor: COLOR.Sematic.Sematic4
                        }]}
                        styleChildren={styles.textBtn}
                        pathImage={isJoined ? require('../../../assets/icons/SignOut.png') : null}
                        styleIcon={{ width: 19, height: 19, marginLeft: 10 }}
                    />
                </ImageBackground>
                <View style={{
                    backgroundColor: COLOR.TextField,
                    paddingVertical: 25,
                    paddingHorizontal: 25,
                    borderRadius: 8,
                    marginTop: 25,
                    marginBottom: 35
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <AppIcon pathImage={require('../../../assets/icons/emtypoChat.png')} />
                        <View style={{ paddingHorizontal: 25 }}>
                            <AppText styleText={styles.forumHeading}>Real-time Forum</AppText>
                            <AppText
                                styleText={styles.forumTitle}
                                numberOfLines={2}>Join now to give real-time PR about yourself</AppText>
                        </View>
                    </View>
                    {!isJoined ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <AppIcon pathImage={require('../../../assets/icons/Info.png')} />
                            <AppText styleText={styles.forumNoti}>Join community to enter this forum</AppText>
                        </View>) : (
                        <AppButton
                            styleBtn={{
                                backgroundColor: 'red',
                                flexDirection: 'row',
                                alignItem: 'center',
                                // width: 100
                            }}
                            children={'Go to forum'}
                            pathImage={require('../../../assets/icons/CaretRight.png')}
                        />
                    )}
                </View>

                <AppText styleText={styles.headingSection}>Member</AppText>
                <AppSearch
                    onChangeText={setTextFilter}
                    value={textFilter}
                    placeholder={'Search by name'}
                    type={'filter'} />
            </View>
        )
    }

    const renderItem = ({ item }: any) => {
        return (
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 16,
                marginBottom: 16,
                backgroundColor: COLOR.Neutral.Neutral1,
                borderRadius: 8,
                flexDirection: 'row',
            }}>
                <AppAvatar
                    styleAvatar={styles.avt}
                    pathImage={{ uri: item.user.avatar }} />
                <View style={{ marginLeft: 20 }} >
                    <AppText styleText={styles.userForum}>{item.user.username}</AppText>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppText styleText={styles.totalFriends}>{item.user.total_friend}</AppText>
                        <AppIcon pathImage={require('../../../assets/icons/Users.png')} />
                    </View>
                    <AppText styleText={styles.userIntro}>{item.user.summary}</AppText>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0, paddingHorizontal: 24 }}>
            <AppFlatlist
                data={dataDetail}
                renderItem={renderItem}
                listHeader={listHeader}
            />
        </View>
    )
}
