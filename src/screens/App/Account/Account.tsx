import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
export const Account = (props: any) => {
    const { navigation } = props
    const [copyID, setCopyID] = useState('')
    const dataUser = useSelector((store: any) => store.USER_INFOR.user)
    // console.log(dataUser);
    // console.log(copyID);

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLOR.Neutral.Neutral0,
            paddingHorizontal: 24,
        }}>
            <AppText styleText={styles.headingTitle}>Account</AppText>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLOR.TextField,
                borderRadius: 8,
                paddingVertical: 18,
                paddingHorizontal: 18,
                marginBottom: 25
            }}>
                <AppAvatar
                    styleAvatar={styles.avatar}
                    pathImage={{ uri: dataUser.user.avatar }} />
                <View style={{ paddingHorizontal: 20 }}>
                    <AppText styleText={styles.userName}>{dataUser.user.username}</AppText>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <AppText styleText={styles.userID}>ID: {dataUser.user.id}</AppText>
                        <AppButton
                            onPress={() => setCopyID(dataUser.user.id)}
                            styleBtn={{ flexDirection: 'row' }}
                            styleIcon={{ marginHorizontal: 15 }}
                            pathImage={require('../../../assets/icons/Copy.png')} />
                    </View>
                </View>
            </View>
            <AppButton
                onPress={() => { }}
                styleBtn={styles.btn}
                children={'Your Profile'}
                styleChildren={styles.title}
                pathImage={require('../../../assets/icons/UserCircle.png')}
            />
            <AppButton
                onPress={() => { }}
                styleBtn={styles.btn}
                children={'Block List'}
                styleChildren={styles.title}
                pathImage={require('../../../assets/icons/Prohibit.png')}
            />
            <AppButton
                onPress={() => { }}
                styleBtn={styles.btn}
                children={'Change Password'}
                styleChildren={styles.title}
                pathImage={require('../../../assets/icons/LockKeyOpen.png')}
            />
            <AppButton
                onPress={() => { }}
                styleBtn={styles.btn}
                children={'Log Out'}
                styleChildren={styles.title}
                pathImage={require('../../../assets/icons/SignOut.png')}
            />
        </View>
    )
}
