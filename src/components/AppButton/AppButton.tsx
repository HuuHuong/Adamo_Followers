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
    children?: string | undefined,
    uri?: string,
    pathImage: ImageSourcePropType,
    onPress?: () => void,
    styleBtn?: ViewStyle | ViewStyle[] | any,
    styleIcon?: ViewStyle | ViewStyle[] | any,
    styleChildren?: ViewStyle | ViewStyle[] | any,
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
        ...rest
    } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styleBtn, { alignItems: 'center' }]}>
            <AppText styleText={styleChildren}>{children}</AppText>
            <AppIcon pathImage={pathImage} styleIcon={styleIcon} />
        </TouchableOpacity>
    )
}
