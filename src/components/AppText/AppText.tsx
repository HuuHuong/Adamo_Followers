import React from 'react'
import {
    View,
    Text,
    TextProps as TextProperties,
    ViewStyle
} from 'react-native'

interface TextProps extends TextProperties {
    children: string | undefined;
    styleText?: ViewStyle | ViewStyle[] | any
}

export const AppText = (props: TextProps) => {
    const {
        children,
        styleText
    } = props

    return (
        <Text style={styleText}>{children}</Text>
    )
}
