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

type VerificationCode = NativeStackNavigationProp<SCREEN_ROUTER, 'VerificationCode'>

export const VerificationCode = () => {
    const navigation = useNavigation<VerificationCode>()
    const onVerify = () => {
        return navigation.navigate('ResetPassword')
    }
    const onResendOTP = () => {
        return
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLOR.Neutral.Neutral0,
            alignItems: 'center',
            // justifyContent: 'center'
        }}>
            <View style={{ width: screenWidth, flex: 1, justifyContent: 'center' }}>
                <View style={{ position: 'absolute', top: 40 }}>
                    <AppButton
                        onPress={() => navigation.goBack()}
                        styleIcon={{ width: 25, height: 25 }}
                        pathImage={require('../../../assets/icons/CaretLeft.png')} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <AppText styleText={styles.headingTitle}>Verification Code</AppText>
                    <AppText styleText={styles.title}>Enter the OTP code from the phone</AppText>
                    <AppText styleText={styles.title}>we just send you</AppText>
                </View>
                <AppInput stylesInput={{ backgroundColor: COLOR.Primary }} />
                <AppButton
                    onPress={onVerify}
                    children={'Verify'}
                    styleChildren={styles.textBtn}
                    pathImage={require('../../../assets/icons/Check.png')}
                    // styleIcon={{with: 20, height: 20}}
                    styleBtn={styles.btn}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 22 }}>
                    <AppText styleText={styles.footerTitle}>Didn't receive OTP code? </AppText>
                    <AppButton
                        onPress={onResendOTP}
                        children={'Resend'}
                        styleChildren={{ fontFamily: 'NotoSans-Bold', fontSize: FontSize.Font16, color: COLOR.Primary }}
                        pathImage={0} />
                </View>
            </View>
        </View>
    )
}
