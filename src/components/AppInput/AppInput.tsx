import React from 'react'
import {
    View,
    Text,
    TextInput,
    TextStyle,
    KeyboardTypeOptions,
    ViewStyle
} from 'react-native'
import { AppText } from '../AppText/AppText'

interface InputProps {
    placeholder?: string
    secureTextEntry?: boolean
    children?: string
    styleText?: ViewStyle | ViewStyle[] | any
    type?: string
    onValueChange?: (e: string | ChangeEvent<any>) => void
    keyboardType?: KeyboardTypeOptions;
    stylesInput?: TextStyle | TextStyle[];
    onFocused?: () => void;
    numpad?: boolean,
    placeholderTextColor?: string
}

export const AppInput = (props: InputProps) => {
    const {
        children,
        placeholder,
        stylesInput,
        keyboardType,
        secureTextEntry,
        onValueChange,
        styleText,
        ...rest
    } = props
    return (
        <View style={{marginTop: 16}}>
            <AppText styleText={styleText}>{children}</AppText>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={stylesInput}
            ></TextInput>
        </View>
    )
}
