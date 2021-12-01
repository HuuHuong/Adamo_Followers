import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR } from '../../../assets'
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
                <View>
                    <View>
                        <AppIcon pathImage={require('../../../assets/icons/Users.png')} />
                        <AppText>aa</AppText>
                    </View>
                </View>
            </View>
        </ImageBackground >
    )
}
