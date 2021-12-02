import React, { useState } from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR, communitiesJoined, FontSize, social } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
export const ProfileUser = (props: any) => {
    const { navigation } = props
    const dataUser = useSelector((store: any) => store.USER_INFOR.user)
    const [copyID, setCopyID] = useState('')
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
                style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}
                imageStyle={{ height: 180 }}
                source={require('../../../assets/icons/Background.png')}
            >
                <View style={{ paddingHorizontal: 24, marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AppButton
                            onPress={() => navigation.goBack()}
                            styleBtn={{ flexDirection: 'row' }}
                            pathImage={require('../../../assets/icons/CaretLeft.png')} />
                        <AppText styleText={styles.headingTitle}>Your Profile</AppText>
                        <AppButton
                            styleBtn={{ flexDirection: 'row' }}
                            pathImage={require('../../../assets/icons/PencilLine.png')} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <AppAvatar
                            styleAvatar={styles.avatar}
                            pathImage={{ uri: dataUser.user.avatar }} />
                        <AppText styleText={styles.textUser}>{dataUser.user.username}</AppText>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <AppText styleText={styles.userID}>ID: {dataUser.user.id}</AppText>
                            <AppButton
                                onPress={() => setCopyID(dataUser.user.id)}
                                styleBtn={{ flexDirection: 'row' }}
                                styleIcon={{ marginHorizontal: 15 }}
                                pathImage={require('../../../assets/icons/Copy.png')} />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 25,
                        marginBottom: 24
                    }}>
                        <View style={styles.itemList}>
                            <AppIcon pathImage={require('../../../assets/icons/Users.png')} />
                            <AppText styleText={[styles.txtItemList, { color: COLOR.Sematic.Sematic5 }]}>2050</AppText>
                        </View>
                        <View style={styles.itemList}>
                            <AppIcon pathImage={require('../../../assets/icons/Users.png')} />
                            <AppText styleText={[styles.txtItemList, { color: COLOR.Sematic.Sematic2 }]}>1024</AppText>
                        </View>
                        <View style={styles.itemList}>
                            <AppIcon pathImage={require('../../../assets/icons/Coin.png')} />
                            <AppText styleText={[styles.txtItemList, { color: COLOR.Sematic.Sematic1 }]}>12000</AppText>
                        </View>
                    </View>
                    {social.map((item) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    flexDirection: 'row',
                                    paddingVertical: 18,
                                    paddingHorizontal: 24,
                                    backgroundColor: COLOR.TextField,
                                    alignItems: 'center',
                                    borderRadius: 8,
                                    marginTop: 12
                                }}
                            >
                                <AppIcon pathImage={item.img} />
                                <AppText styleText={styles.textItemSocial}>{item.title}</AppText>
                            </View>
                        )
                    })}
                    <AppText styleText={styles.headingTitle2}>Introduction</AppText>
                    <AppText styleText={styles.titleIntro}>Hello world, I’m Yuki from Japan and I’m creating the beautiful videos.
                        I wish Facebook would notify me when someone deletes me.
                        That way I could ‘Like’ it.
                        My brain is divided into two parts.</AppText>
                    <AppText styleText={styles.headingTitle2}>Your joined communities</AppText>

                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        {communitiesJoined.map((item) => {
                            return (
                                <View
                                    key={item.id}
                                    style={{
                                        marginBottom: 16,
                                        marginRight: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: COLOR.TextField,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        borderRadius: 16
                                    }}>
                                    <AppAvatar
                                        styleAvatar={styles.imgCommunity}
                                        pathImage={item.img} />
                                    <AppText styleText={styles.textCommunity}>{item.title}</AppText>
                                </View>
                            )
                        })}
                    </View>
                    <AppText styleText={styles.headingTitle2}>Activities log</AppText>
                    <View style={{ alignItems: 'center' }}>
                        <AppButton
                            styleBtn={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '50%',
                                marginTop: 17,
                                marginBottom: 60
                            }}
                            children={'Older activites'}
                            styleChildren={{
                                fontFamily: 'NotoSans-Bold',
                                fontSize: FontSize.Font16,
                                color: COLOR.DarkPrimary,
                                marginRight: 12
                            }}
                            pathImage={require('../../../assets/icons/CaretRight.png')}
                            styleIcon={{ marginTop: 4 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 8,
                        backgroundColor: COLOR.Primary,
                        marginBottom: 65
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#3490A5',
                            paddingHorizontal: 20,
                            paddingVertical: 16,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        }}>
                            <AppIcon pathImage={require('../../../assets/icons/Bell.png')} />
                            <AppText styleText={styles.notiFollowers}>Notifications from Followers</AppText>
                        </View>
                        <View style={{
                            paddingHorizontal: 20,
                            paddingVertical: 16,
                        }}>
                            <AppText styleText={[styles.textNoti, { fontFamily: 'NotoSans-Regular' }]}>
                                <AppText styleText={[styles.textNoti, { fontFamily: 'NotoSans-Bold', fontWeight: '500' }]}>Photo Kid </AppText>
                                joined thanks to you! You get 300tm!</AppText>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Approval')}
                        style={styles.btnFooter}>
                        <AppText styleText={styles.titleFooter}>Waiting for approval</AppText>
                        <View style={{
                            width: 28,
                            height: 28,
                            backgroundColor: COLOR.DarkPrimary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 112
                        }}>
                            <AppText styleText={styles.numReminders}>5</AppText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FriendsRequest')}
                        style={styles.btnFooter}>
                        <AppText styleText={styles.titleFooter}>Friend request sent</AppText>
                        <View style={{
                            width: 28,
                            height: 28,
                            backgroundColor: COLOR.DarkPrimary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 112
                        }}>
                            <AppText styleText={styles.numReminders}>22</AppText>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </ScrollView >
    )
}
