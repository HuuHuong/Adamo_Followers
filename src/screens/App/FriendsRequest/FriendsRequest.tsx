import React from 'react'
import { View, Text } from 'react-native'
import { ApprovalList, COLOR } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppHeader } from '../../../components/AppHeader/AppHeader'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'

export const FriendsRequest = (props: any) => {
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
                    <AppText styleText={styles.itemRequest}>Request pending...</AppText>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}>
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <AppHeader
                    onPress={() => navigation.goBack()}
                    text={'Friend request sent'}
                />
                <AppFlatlist
                    styleFlatList={{ marginTop: 16 }}
                    data={ApprovalList}
                    // keyExtractor={(item: any)}
                    renderItem={renderItem}
                ></AppFlatlist>
            </View>
        </View>
    )
}
