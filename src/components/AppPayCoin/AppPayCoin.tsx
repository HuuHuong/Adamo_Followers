import React from 'react'
import {
    View,
    ViewStyle,
    Text,
    TextProps as TextProperties,
    ImageProps as PropsImage,
    ImageSourcePropType,
    TouchableOpacityProps,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import { COLOR } from '../../assets'
import { AppIcon } from '../AppIcon'
import { AppText } from '../AppText'

interface ButtonProps extends TouchableOpacityProps {
    cost?: string | undefined,
    payment?: string | undefined,
    uri?: string,
    pathImage: ImageSourcePropType,
    onPress?: () => void,
    styleBtn?: ViewStyle | ViewStyle[] | any,
    styleIcon?: ViewStyle | ViewStyle[] | any,
    styleCost?: ViewStyle | ViewStyle[] | any,
    stylePayment?: ViewStyle | ViewStyle[] | any,
}

export const AppPayCoin = (props: ButtonProps) => {
    const {
        cost,
        payment,
        styleCost,
        stylePayment,
        uri,
        pathImage,
        onPress,
        styleBtn,
        styleIcon,
        ...rest
    } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btn}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 26 }}>
                <AppIcon pathImage={pathImage} styleIcon={styleIcon} />
                <AppText styleText={styleCost}>{cost} tc</AppText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 28 }}>
                <Image source={require('../../assets/icons/CurrencyJpy.png')} />
                <AppText styleText={stylePayment}> {payment}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 16,
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})