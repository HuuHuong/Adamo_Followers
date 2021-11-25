import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { SCREEN_ROUTER } from '../../../assets/route'
import { FontSize, screenWidth } from '../../../assets/Spacing'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'


type ForgotPassword = NativeStackNavigationProp<SCREEN_ROUTER, 'ForgotPassword'>

export const ForgotPassword = () => {
    const navigation = useNavigation<ForgotPassword>()
    const onSubmit = () => {
        return navigation.navigate('VerificationCode')
    }
    const onBackToLogin = () => {
        return navigation.navigate('LoginApp')
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLOR.Neutral.Neutral0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <AppText styleText={styles.headingTitle}>Forgot Password</AppText>
            <AppText styleText={styles.title}>Enter your email and we'll send the instruction to you</AppText>
            <View style={{ width: screenWidth }}>
                <View style={{ marginTop: 28 }}>
                    <AppInput
                        children={'Email'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    ></AppInput>
                    <AppButton
                        onPress={onSubmit}
                        children={'Submit'}
                        styleChildren={[styles.textBtn, { color: COLOR.Neutral.Neutral0, }]}
                        pathImage={require('../../../assets/icons/ArrowRight.png')}
                        styleBtn={[styles.btn, { backgroundColor: COLOR.Primary, marginTop: 36 }]}
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
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font28,
        color: COLOR.Neutral.Neutral10,
        marginBottom: 6
    },
    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        color: COLOR.Neutral.Neutral6
    },
    titleInput: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4
    },
    inputForm: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        marginTop: 4
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        marginRight: 10
    }
})
