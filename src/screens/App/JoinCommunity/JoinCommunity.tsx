import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR, screenWidth } from '../../../assets'
import { AppButton } from '../../../components/AppButton'
import { AppIcon } from '../../../components/AppIcon'
import { AppSearch } from '../../../components/AppSearch'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'

export const JoinCommunity = (props: any) => {
    const { navigation } = props
    const [textFilter, setTextFilter] = useState('')
    const inforCommunity = useSelector((store: any) => store.COMMUNITIES.communityForum)
    const [isJoined, setIsJoined] = useState<Boolean>(false)
    console.log(isJoined)

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0, paddingHorizontal: 24 }}>
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
                source={inforCommunity.img}
                resizeMode={'cover'}
            >
                <AppText styleText={styles.headingTitle}>{inforCommunity.title}</AppText>
                <AppText styleText={styles.title}>{inforCommunity.numMember} members</AppText>
                <AppButton
                    activeOpacity={1}
                    onPress={() => setIsJoined(!isJoined)}
                    children={!isJoined ?
                        'Participate' : 'Leaving'
                    }
                    styleBtn={[styles.btn,
                    !isJoined ? { backgroundColor: COLOR.Primary } : {
                        backgroundColor: COLOR.Sematic.Sematic4
                    }]}
                    styleChildren={styles.textBtn}
                    pathImage={isJoined ? require('../../../assets/icons/SignOut.png') : null}
                    styleIcon={{ width: 19, height: 19 }}
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                    <AppIcon pathImage={require('../../../assets/icons/Info.png')} />
                    <AppText styleText={styles.forumNoti}>Join community to enter this forum</AppText>
                </View>
            </View>

            <AppText styleText={styles.headingSection}>Member</AppText>
            <AppSearch
                onChangeText={setTextFilter}
                value={textFilter}
                placeholder={'Search by name'}
                type={'filter'} />

        </ScrollView>
    )
}
