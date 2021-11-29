import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { FontSize, screenWidth } from '../../../assets/Spacing'
import { Sign_Up } from '../../../services/API'
import { styles } from './styles'
import { AppPicker } from '../../../components/AppPicker'

export const RegisterApp = (props: any) => {
    const navigation = props
    const gender = ['Male', 'Female', 'Other']
    const year = []
    for (var i = 1800; i <= 2025; i++) {
        year.unshift(i.toString())
    }
    const [genderSelected, setGenderSelected] = useState([])
    const [yearSelected, setYearSelected] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [background, setBackground] = useState(Boolean)
    const [backgroundPass, setBackgroundPass] = useState(Boolean)
    const [messeage, setMessage] = useState('')
    const [messagePass, setMessagePass] = useState('')
    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const onSubmit = async () => {
        try {
            const response = await Sign_Up({
                email: email,
                password: password,
                username: userName,
                introduce_code: "81025117",
                gender: 1,
                age: yearSelected,
                socials: [
                ]
            })
            console.log('rs', response);
            navigation.navigate('VerificationCode')
        } catch (error) {
            console.error({ error });

            if (validateEmail(email) === false)
                return (
                    setBackground(true),
                    setMessage('Invalid your email')
                )
            if (password.length < 6)
                return (
                    setMessagePass('The password must be at least 6 characters.'),
                    setBackgroundPass(true)
                )
            else if (password.length > 32)
                return (
                    setMessagePass('The password must not be greater than 32 characters.'),
                    setBackgroundPass(true)
                )
        }
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: screenWidth }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                        <AppButton
                            onPress={() => navigation.goBack()}
                            styleBtn={{ flexDirection: 'row' }}
                            styleIcon={{ width: 25, height: 25, }}
                            pathImage={require('../../../assets/icons/CaretLeft.png')} />
                        <AppText styleText={styles.headingTitle}>Register</AppText>
                    </View>
                    <AppText styleText={styles.headingTitle2}>Your SNS accounts</AppText>
                    <AppText styleText={styles.title}>Add the accounts you want to increase followers</AppText>
                    <AppInput
                        // onValueChange=
                        children={'Youtube'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppInput
                        children={'Instagram'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppInput
                        children={'Twitter'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppInput
                        children={'Facebook'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppInput
                        children={'Whatsapp'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppText styleText={styles.headingTitle2}>Follower account</AppText>
                    <AppInput
                        onFocused={() => {
                            return (setBackground(false), setMessage(''))

                        }}
                        onValueChange={setEmail}
                        value={email}
                        children={'Email'}
                        placeholder={'example@gmail.com'}
                        styleText={styles.titleInput}
                        stylesInput={[styles.inputForm, background ? {
                            borderColor: 'red',
                            borderWidth: 1,
                        } : { backgroundColor: COLOR.TextField }]}
                        error={messeage}
                    />
                    <AppInput
                        onFocused={() => { return (setBackgroundPass(false), setMessagePass('')) }}
                        error={messagePass}
                        onValueChange={setPassword}
                        value={password}
                        children={'Password'}
                        styleText={styles.titleInput}
                        stylesInput={[styles.inputForm, backgroundPass ? {
                            borderColor: 'red',
                            borderWidth: 1,
                        } : { backgroundColor: COLOR.TextField }
                        ]}
                        secureTextEntry={true}
                    />
                    <AppInput
                        onValueChange={setUserName}
                        value={userName}
                        children={'Username'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <AppPicker
                            stylePicker={styles.pickerForm}
                            children={'Gender'}
                            styleChildren={styles.titleInput}
                            arrayValue={gender}
                            selectedValue={gender}
                            onValueChange={setGenderSelected}
                            currentValue={genderSelected}
                        />
                        <AppPicker
                            children={'Birth year'}
                            styleChildren={styles.titleInput}
                            stylePicker={styles.pickerForm}
                            arrayValue={year}
                            onValueChange={setYearSelected}
                            currentValue={yearSelected}
                        />
                    </View>
                    <AppInput
                        children={'Introducion Code'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppButton
                        onPress={onSubmit}
                        children={'Submit'}
                        styleChildren={styles.textBtn}
                        pathImage={require('../../../assets/icons/ArrowRight.png')}
                        styleBtn={styles.btn}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

