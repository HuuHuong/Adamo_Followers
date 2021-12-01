import React from 'react'
import {
    View,
    Text,
    TextProps as TextProperties,
    ViewStyle
} from 'react-native'

interface TextProps extends TextProperties {
    children: string;
    styleText?: ViewStyle | ViewStyle[] | any,
    numberOfLines?: number
}

export const AppText = (props: TextProps) => {
    const {
        children,
        styleText,
        numberOfLines
    } = props

    return (
        <Text
            numberOfLines={numberOfLines}
            style={styleText}>{children}</Text>
    )
}
