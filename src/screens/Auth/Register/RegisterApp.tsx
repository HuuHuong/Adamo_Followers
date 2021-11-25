import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { COLOR } from '../../../assets/Theme'
import { AppButton } from '../../../components/AppButton/AppButton'
import { AppIcon } from '../../../components/AppIcon/AppIcon'
import { AppInput } from '../../../components/AppInput/AppInput'
import { AppText } from '../../../components/AppText/AppText'
import { FontSize, screenWidth } from '../../../assets/Spacing'
import { useNavigation } from '@react-navigation/core'
import { SCREEN_ROUTER } from '../../../assets/route'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Signup } from '../../../services/API'
import { styles } from './styles'

type RegisterApp = NativeStackNavigationProp<SCREEN_ROUTER, 'RegisterApp'>

export const RegisterApp = () => {
    const navigation = useNavigation<RegisterApp>()
    const onSubmit = () => {
        return navigation.navigate('VerificationCode')
    }

    const signUp = async () => {
        try {
            const response = await Signup({

            })
        }
        catch (error) {
            console.error(error);

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
                            styleIcon={{ width: 25, height: 25 }}
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
                        children={'Email'}
                        placeholder={'example@gmail.com'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
                    <AppInput
                        children={'Password'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                        secureTextEntry={true}
                    />
                    <AppInput
                        children={'Username'}
                        styleText={styles.titleInput}
                        stylesInput={styles.inputForm}
                    />
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

