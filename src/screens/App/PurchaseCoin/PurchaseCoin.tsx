import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { COLOR, screenWidth, SCREEN_ROUTER } from '../../../assets'
import { AppButton } from '../../../components/AppButton'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
import { AppPayCoin } from '../../../components/AppPayCoin'
import { AppIcon } from '../../../components/AppIcon'

type PurchaseCoin = NativeStackNavigationProp<SCREEN_ROUTER, 'PurchaseCoin'>
export const PurchaseCoin = (props: PurchaseCoin) => {
    const navigation = useNavigation<PurchaseCoin>()
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: COLOR.Neutral.Neutral0 }}
        >
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginTop: 40, width: screenWidth }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppButton
                            onPress={() => navigation.goBack()}
                            styleBtn={{ flexDirection: 'row', marginBottom: 8 }}
                            styleIcon={{ width: 25, height: 25, }}
                            pathImage={require('../../../assets/icons/CaretLeft.png')} />
                        <AppText styleText={[styles.headingTitle, {
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            zIndex: -1
                        }]}>Purchase TomoCoin</AppText>
                    </View>
                    <AppPayCoin
                        cost={'1000'}
                        payment={'600'}
                        styleCost={styles.txtCost}
                        pathImage={require('../../../assets/icons/minCoin.png')}
                        styleIcon={{ marginLeft: 16 }}
                    />
                    <AppPayCoin
                        cost={'3000'}
                        payment={'1500'}
                        styleCost={styles.txtCost}
                        pathImage={require('../../../assets/icons/everageCoin.png')}
                        styleIcon={{ marginLeft: 11 }}
                    />
                    <AppPayCoin
                        cost={'5000'}
                        payment={'2300'}
                        styleCost={styles.txtCost}
                        pathImage={require('../../../assets/icons/maxCoin.png')}
                        styleIcon={{ marginLeft: 11 }}
                    />
                    <AppText styleText={[styles.headingTitle, { marginTop: 40 }]}>Your TomoCoin</AppText>
                    <AppText styleText={styles.title}>Current count (tc)</AppText>
                    <AppText styleText={styles.currentCoin}>300</AppText>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppIcon pathImage={require('../../../assets/icons/Info.png')} />
                        <AppText styleText={[styles.headingTitle, { marginLeft: 10 }]}>Rules and terms</AppText>
                    </View>
                    <AppText styleText={styles.rulesFooter}>掲示板投稿＝５tm、メール送信＝10tm、申請＝５0tm、承認＝５0tm申請は相手に承認された場合に消費。申請後３日以内に承認されなければ返還されます。掲示板投稿、メール、申請はTM保有数を限度とする。TMが５0無いと相手からの申請を承認できません。退会の場合、一切の返金はありませんのでご了承ください。</AppText>
                </View>
            </View>
        </ScrollView >
    )
}
