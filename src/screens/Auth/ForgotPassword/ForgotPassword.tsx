import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { screenWidth } from '../../../assets/Spacing'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { Forgot_Password } from '../../../services/API'
import { styles } from './styles'

export const ForgotPassword = (props: any) => {
    const { navigation } = props
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [background, setBackground] = useState(Boolean)

    const onSubmit = async () => {
        try {
            const response = await Forgot_Password({ email: email })
            navigation.navigate('VerificationCode')
            console.log(response);
        } catch (error) {
            console.log({ error });
            if (validateEmail(email) === false)
                return (
                    setMessage('Your email is invalid'),
                    setBackground(true)
                )
            else return (
                setMessage('Your email is incorrect or does not exist'),
                setBackground(true)
            )
        }
    }

    // const onSubmit = async () => {
    //     FakeData.map((item) => {
    //         if (item.email === email && validateEmail(email) === true)
    //             const 
    //             return (
    //                 setIsMessage(false),
    //                 navigation.navigate('VerificationCode'))
    //         else if (validateEmail(email) === true && item.email !== email)
    //             return (
    //                 setBackground(true),
    //                 setMessage('Your email is incorrect or does not exist'),
    //                 setIsMessage(true)
    //             )
    //         else return (
    //             setBackground(true),
    //             setMessage('Invalid your email'),
    //             setIsMessage(true)
    //         )
    //     })
    // }

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
                    {message ? <Text>{message}</Text> : null}
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
