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

type RegisterApp = NativeStackNavigationProp<SCREEN_ROUTER, 'RegisterApp'>

export const RegisterApp = () => {
    const navigation = useNavigation<RegisterApp>()
    const onSubmit = () => {
        return navigation.navigate('VerificationCode')
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

const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        left: '100%'
    },
    headingTitle2: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        marginTop: 35,
        marginBottom: 4
    },
    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        color: COLOR.Neutral.Neutral3,
        marginBottom: 8
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
        paddingBottom: 15,
        paddingLeft: 16,
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
        marginRight: 10,
        marginTop: 16,
        marginBottom: 16
    },
    btn: {
        backgroundColor: COLOR.Primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 80
    }
})