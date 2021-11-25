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

import { COLOR } from '../../assets/Theme'
import { AppIcon } from '../AppIcon/AppIcon'
import { AppText } from '../AppText/AppText'

interface ButtonProps extends TouchableOpacityProps {
    children?: string,
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
            style={[styleBtn, {flexDirection:'row', alignItems: 'center'}]}>
            <AppText styleText={styleChildren}>{children}</AppText>
            <AppIcon pathImage={pathImage} styleIcon={styleIcon} />
        </TouchableOpacity>
    )
}
