import React, { useState } from 'react'
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
import { styles } from './styles'
import { FakeData } from '../../../assets/FakeData'

type LoginScreen = NativeStackNavigationProp<SCREEN_ROUTER, 'LoginApp'>

export const LoginApp = () => {
    const navigation = useNavigation<LoginScreen>()
    //control
    // const onLogin = () => {
    //     return navigation.navigate('BottomNavigation')
    // }
    const onForgotPass = () => {
        return navigation.navigate('ForgotPassword')
    }
    const onRegister = () => {
        return navigation.navigate('RegisterApp')
    }

    //state
    const [isFocused, setIsFocused] = React.useState(false);
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    const [background, setBackground] = useState(Boolean)
    const [messeage, setMessage] = useState('')

    const checkLogin = () => {
        FakeData.map((item) => {
            if (item.email === email && item.password === password)
                return navigation.navigate('BottomNavigation')
            else if (item.email === email && item.password != password)
                return (
                    setMessage('Your email or password is incorect')
                )
            else if (validateEmail(email) === false)
                return (
                    setBackground(true),
                    setMessage('Invalid your email')
                )
        })
    }

    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: screenWidth }}>
                <View style={{ alignItems: 'center' }}>
                    <AppIcon pathImage={require('../../../assets/icons/LOGO.png')} styleIcon={styles.logo} />
                    <AppText styleText={styles.headingTitle}>Login</AppText>
                </View>

                <AppInput
                    onFocused={() => { setBackground(false), setMessage('') }}
                    onValueChange={setEmail}
                    value={email}
                    children={'Email'}
                    styleText={styles.titleInput}
                    stylesInput={[styles.inputForm,
                    background ? {
                        borderColor: 'red',
                        borderWidth: 1,
                    } : { backgroundColor: COLOR.TextField }
                    ]}
                    placeholder={'Your name'} />
                {messeage ? <Text>{messeage}</Text> : null}
                <AppInput
                    onValueChange={setPassword}
                    value={password}
                    children={'Password'}
                    styleText={styles.titleInput}
                    stylesInput={[styles.inputForm,
                    background ? {
                        borderColor: 'red',
                        borderWidth: 1,
                    } : { backgroundColor: COLOR.TextField }
                    ]}
                    placeholder={'Your password'}
                    secureTextEntry={true}
                />
                {/* {isMessage && messeage === 'Error your password!' ? <Text>{messeage}</Text> : null} */}

                <TouchableOpacity
                    onPress={onForgotPass}
                    style={{ alignItems: 'flex-end' }}>
                    <AppText styleText={[styles.titleInput, { marginTop: 16, marginBottom: 30 }]}>Forgot Password</AppText>
                </TouchableOpacity>
                <AppButton
                    onPress={checkLogin}
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
