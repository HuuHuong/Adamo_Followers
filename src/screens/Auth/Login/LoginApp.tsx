import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { FontSize, FontWithBold, screenWidth } from '../../../assets/Spacing'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppIcon } from '../../../components/AppIcon/AppIcon'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { useNavigation } from '@react-navigation/core'
import { SCREEN_ROUTER } from '../../../assets/route'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type LoginScreen = NativeStackNavigationProp<SCREEN_ROUTER, 'LoginApp'>

export const LoginApp = () => {
    const navigation = useNavigation<LoginScreen>()
    const onLogin = () => {
        return navigation.navigate('BottomNavigation')
    }
    const onForgotPass = () => {
        return navigation.navigate('ForgotPassword')
    }
    const onRegister = () => {
        return navigation.navigate('RegisterApp')
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: screenWidth }}>
                <View style={{ alignItems: 'center' }}>
                    <AppIcon pathImage={require('../../../assets/icons/LOGO.png')} styleIcon={styles.logo} />
                    <AppText styleText={styles.headingTitle}>Login</AppText>
                </View>

                <AppInput
                    children={'Email'}
                    styleText={styles.titleInput}
                    stylesInput={styles.inputForm}
                    placeholder={'Your name'} />
                <AppInput
                    children={'Password'}
                    styleText={styles.titleInput}
                    stylesInput={styles.inputForm}
                    placeholder={'Your password'} />
                <TouchableOpacity
                    onPress={onForgotPass}
                    style={{ alignItems: 'flex-end' }}>
                    <AppText styleText={[styles.titleInput, { marginTop: 16, marginBottom: 30 }]}>Forgot Password</AppText>
                </TouchableOpacity>
                <AppButton
                    onPress={onLogin}
                    children={'Login'}
                    styleChildren={styles.textBtn}
                    styleBtn={styles.btn}
                    pathImage={require('../../../assets/icons/ArrowRight.png')}
                    styleIcon={styles.iconBtn}
                />
                <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AppText style={styles.footerTitle}>Don't have an account? </AppText>
                    <TouchableOpacity onPress={onRegister}>
                        <AppText styleText={[styles.footerTitle, { color: COLOR.Primary }]}>Register</AppText>
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
    },
    headingTitle: {
        marginTop: 67,
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font28,
        color: COLOR.Neutral.Neutral10
    },
    titleInput: {
        marginBottom: 4,
        fontFamily: 'NotoSans-Regular',
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4,
        fontSize: FontSize.Font16
    },
    inputForm: {
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 16,
        paddingLeft: 16,
    },
    btn: {
        backgroundColor: COLOR.Primary,
        borderRadius: 8,
        justifyContent: 'center'
    },
    textBtn: {
        paddingTop: 17,
        paddingBottom: 17,
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
        marginRight: 10
    },
    iconBtn: {
        with: 20,
        height: 20
    },
    footerTitle: {
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral8,
        fontWeight: '500'
    }
})