import React, { Children } from 'react'
import {
    View,
    ViewStyle,
    Text,
    TextProps as TextProperties,
    ImageProps as PropsImage,
    ImageSourcePropType,
    TouchableOpacityProps,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { AppIcon } from '../AppIcon'
import { AppText } from '../AppText'

interface ButtonProps extends TouchableOpacityProps {
    children?: JSX.Element | JSX.Element[] | string | null,
    uri?: string,
    pathImage: ImageSourcePropType,
    onPress?: () => void,
    styleBtn?: ViewStyle | ViewStyle[] | any,
    styleIcon?: ViewStyle | ViewStyle[] | any,
    styleChildren?: ViewStyle | ViewStyle[] | any,
    activeOpacity?: number
}

export const AppButton = (props: ButtonProps) => {
    const {
        children,
        styleChildren,
        uri,
        pathImage,
        onPress,
        styleBtn,
        styleIcon,
        activeOpacity,
        ...rest
    } = props

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
            style={styleBtn}>
            {!!children && <AppText styleText={styleChildren}>{children}</AppText>}
            {!!pathImage && <AppIcon pathImage={pathImage} styleIcon={styleIcon} />}
        </TouchableOpacity>
    )
}
