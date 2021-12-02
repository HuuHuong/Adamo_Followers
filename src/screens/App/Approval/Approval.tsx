import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { ApprovalList, COLOR, FakeData3, FontSize } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppHeader } from '../../../components/AppHeader/AppHeader'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
export const Approval = (props: any) => {
    const { navigation } = props

    const renderItem = ({ item }: any) => {
        return (
            <View style={{
                flexDirection: 'row',
                paddingVertical: 16,
                paddingHorizontal: 16,
                backgroundColor: COLOR.Neutral.Neutral1,
                marginBottom: 20,
                borderRadius: 8
            }}>
                <AppAvatar
                    styleAvatar={styles.avt}
                    pathImage={item.avt} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '80%',
                        marginBottom: 24
                    }}>
                        <View>
                            <AppText styleText={styles.username}>{item.username}</AppText>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AppText styleText={styles.numFriends}>{item.numFriends}</AppText>
                                <AppIcon pathImage={require('../../../assets/icons/Users.png')} />
                            </View>
                        </View>
                        <AppText style={{}}>{item.time}</AppText>
                    </View>
                    {item.communities.map((itemCommunities: any) => {
                        return (
                            <View
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                key={itemCommunities.id}>
                                <AppAvatar
                                    styleAvatar={styles.imgCommunities}
                                    pathImage={itemCommunities.communities_img} />
                                <AppText styleText={styles.textCommunities}>{itemCommunities.communities_name}</AppText>
                            </View>
                        )
                    })}
                    <View style={{ flexDirection: 'row', width: '80%', marginTop: 24 }}>
                        <AppButton
                            styleChildren={{
                                paddingVertical: 12,
                                paddingHorizontal: 32,
                                borderRadius: 8,
                                backgroundColor: COLOR.Primary,
                                marginRight: 16,
                                fontFamily: 'NotoSans-Bold',
                                fontSize: FontSize.Font16,
                                color: COLOR.Neutral.Neutral0
                            }}
                            children={'Reject'} />
                        <AppButton
                            styleChildren={{
                                paddingVertical: 12,
                                paddingHorizontal: 32,
                                borderRadius: 8,
                                borderColor: COLOR.Neutral.Neutral4,
                                borderWidth: 1,
                                fontFamily: 'NotoSans-Bold',
                                fontSize: FontSize.Font16,
                                color: COLOR.Neutral.Neutral4
                            }}
                            children={'Accept'} pathImage={0} />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}>
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <AppHeader
                    onPress={() => navigation.goBack()}
                    text={'Waiting for approval'} />
                {/* <AppText></AppText> */}
                <AppFlatlist
                    styleFlatList={{ marginTop: 16 }}
                    data={ApprovalList}
                    // keyExtractor={item?.id}
                    renderItem={renderItem}
                ></AppFlatlist>
            </View>
        </View>
    )
}
