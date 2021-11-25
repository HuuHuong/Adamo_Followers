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

type ResetSuccess = NativeStackNavigationProp<SCREEN_ROUTER, 'ResetSuccess'>
export const ResetSuccess = () => {
    const navigation = useNavigation<ResetSuccess>()
    const onBackToLogin = () => {
        return navigation.navigate('LoginApp')
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLOR.Neutral.Neutral0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ width: screenWidth, alignItems: 'center', justifyContent: 'center' }}>
                <AppIcon
                    styleIcon={{ marginBottom: 20 }}
                    pathImage={require('../../../assets/icons/CheckCircle.png')} />
                <AppText styleText={styles.title}>Your password has been</AppText>
                <AppText styleText={styles.title}>reset successfully!</AppText>
                <AppButton
                    onPress={onBackToLogin}
                    styleBtn={styles.btn}
                    children={'Back to login'}
                    styleChildren={styles.textBtn}
                    pathImage={0} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        color: COLOR.Neutral.Neutral8,
    },
    btn: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16,
        width: '100%',
        marginTop: 45,
        borderColor: COLOR.Neutral.Neutral8
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral8
    }
})