import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppIcon } from '../../../components/AppIcon/AppIcon'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { useNavigation } from '@react-navigation/core'
import { SCREEN_ROUTER } from '../../../assets/route'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FontSize, screenWidth } from '../../../assets/Spacing'
import { styles } from './styles'

type ResetPassword = NativeStackNavigationProp<SCREEN_ROUTER, 'ResetPassword'>
export const ResetPassword = () => {
    const navigation = useNavigation<ResetPassword>()
    const onReset = () => {
        return navigation.navigate('ResetSuccess')
    }
    const onBackToLogin = () => {
        return navigation.navigate('LoginApp')
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLOR.Neutral.Neutral0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <AppText styleText={styles.headingTitle}>Reset Password</AppText>
            <View style={{ width: screenWidth }}>
                <AppInput
                    children={'New Password'}
                    styleText={styles.titleInput}
                    stylesInput={styles.inputForm}
                    placeholder={'Your new password'}
                    secureTextEntry={true}
                />
                <AppInput
                    children={'Confirm New Password'}
                    styleText={styles.titleInput}
                    stylesInput={styles.inputForm}
                    placeholder={'Enter your password again'}
                    secureTextEntry={true}
                />
                <AppButton
                    onPress={onReset}
                    children={'Reset'}
                    styleChildren={[styles.textBtn, { color: COLOR.Neutral.Neutral0 }]}
                    styleBtn={[styles.btn, { backgroundColor: COLOR.Primary, marginTop: 70, }]}
                    pathImage={0}
                />
                <AppButton
                    onPress={onBackToLogin}
                    children={'Back to login'}
                    styleChildren={[
                        styles.textBtn, { color: COLOR.Neutral.Neutral8, }]}
                    styleBtn={[styles.btn, { borderWidth: 1, borderColor: COLOR.Neutral.Neutral8, marginTop: 16 }]}
                    pathImage={0} />

            </View>
        </View>
    )
}

