import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREEN_ROUTER } from '../../../assets/route'
import { screenWidth } from '../../../assets/Spacing'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { styles } from './styles'
import { FakeData } from '../../../assets/FakeData'

type ForgotPassword = NativeStackNavigationProp<SCREEN_ROUTER, 'ForgotPassword'>

export const ForgotPassword = () => {
    const navigation = useNavigation<ForgotPassword>()
    const [email, setEmail] = useState('')
    const [messeage, setMessage] = useState('')
    const [isMessage, setIsMessage] = useState(Boolean)
    const [background, setBackground] = useState(Boolean)


    const onSubmit = () => {
        FakeData.map((item) => {
            if (item.email === email && validateEmail(email) === true)
                return (
                    setIsMessage(false),
                    navigation.navigate('VerificationCode'))
            else if (validateEmail(email) === true && item.email !== email)
                return (
                    setBackground(true),
                    setMessage('Your email is incorrect or does not exist'),
                    setIsMessage(true)
                )
            else return (
                setBackground(true),
                setMessage('Invalid your email'),
                setIsMessage(true)
            )
        })
    }

    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
                        onValueChange={setEmail}
                        onFocused={() => { setBackground(false), setMessage('') }}
                        value={email}
                        children={'Email'}
                        styleText={styles.titleInput}
                        stylesInput={[styles.inputForm,
                        background ? {
                            borderColor: 'red',
                            borderWidth: 1,
                        } : { backgroundColor: COLOR.TextField }
                        ]}
                    ></AppInput>
                    {isMessage ? <Text>{messeage}</Text> : null}
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
