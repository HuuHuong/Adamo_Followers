import React from 'react'
import {
    View,
    Text,
    TextProps as TextProperties,
    ViewStyle,
    LayoutChangeEvent
} from 'react-native'

interface TextProps extends TextProperties {
    children: React.ReactNode;
    styleText?: ViewStyle | ViewStyle[] | any,
    numberOfLines?: number,
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

export const AppText = (props: TextProps) => {
    const {
        children,
        styleText,
        numberOfLines,
        onLayout
    } = props

    return (
        <Text
            onLayout={onLayout}
            numberOfLines={numberOfLines}
            style={styleText}>{children}</Text>
    )
}
