import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { FontSize, FontWithBold, screenWidth } from '../../../assets/Spacing'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppIcon } from '../../../components/AppIcon/AppIcon'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { styles } from './styles'
import { FakeData } from '../../../assets/FakeData'
import { Log_In, setToken } from '../../../services/API'
import { useDispatch } from "react-redux"

export const LoginApp = (props: any) => {
    const { navigate } = props.navigation
    const dispatch = useDispatch()
    //state
    const [isFocused, setIsFocused] = React.useState(false);
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    const [background, setBackground] = useState(Boolean)
    const [messeage, setMessage] = useState('')
    const checkLogin = async () => {
        try {
            const response = await Log_In({
                email: email,
                password: password,
                device_token: "uulq84ejbkPeWTzIgZcDGqUAhbsY6ZPdbLyr61Y2sSLtXx-DtSS3XLqnuyWHNu1n6DbH0cURQeqc4FT5asddasdaN"
            })
            setToken(response.data.data.token)
            navigate('BottomNavigation')
        } catch (error) {
            console.log({ error })
            return (
                setBackground(true),
                setMessage('Your email is incorrect or does not exist')
            )
        }
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
                    placeholder={'Your name'}
                    error={messeage} />

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
                    type={'password'}
                    placeholder={'Your password'}
                    secureTextEntry={true}
                />
                {/* {isMessage && messeage === 'Error your password!' ? <Text>{messeage}</Text> : null} */}
                <View style={{ flexDirection: 'row-reverse' }}>
                    <AppButton
                        onPress={() => navigate('ForgotPassword')}
                        styleBtn={{ marginTop: 16, marginBottom: 30 }}
                        children={'Forgot Password'}
                        styleChildren={styles.titleInput}
                        pathImage={0} />
                </View>
                <AppButton
                    onPress={checkLogin}
                    children={'Login'}
                    styleChildren={styles.textBtn}
                    styleBtn={styles.btn}
                    pathImage={require('../../../assets/icons/ArrowRight.png')}
                />
                <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AppText style={styles.footerTitle}>Don't have an account? </AppText>
                    <TouchableOpacity onPress={() => navigate('RegisterApp')}>
                        <AppText styleText={[styles.footerTitle, { color: COLOR.Primary }]}>Register</AppText>
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}
