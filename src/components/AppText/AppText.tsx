import React from 'react'
import {
    View,
    Text,
    TextProps as TextProperties,
    ViewStyle
} from 'react-native'

interface TextProps extends TextProperties {
    children?: string,
    styleText?: ViewStyle | ViewStyle[] | any
}

export const AppText = (props: TextProps) => {
const {
    children,
    styleText
} = props

    return (
        <View>
            <Text style={styleText}>{children}</Text>
        </View>
    )
}
