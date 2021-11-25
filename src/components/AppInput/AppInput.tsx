import React, { ChangeEvent } from 'react'
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
    onValueChange?: (e: string) => void
    keyboardType?: KeyboardTypeOptions;
    stylesInput?: TextStyle | TextStyle[];
    onFocused?: () => void;
    numpad?: boolean,
    placeholderTextColor?: string,
    value?: string,

}

export const AppInput = (props: InputProps) => {
    const {
        children,
        placeholder,
        stylesInput,
        keyboardType,
        secureTextEntry,
        onValueChange,
        value,
        styleText,
        onFocused,
        ...rest
    } = props

    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ marginTop: 16 }}>
            <AppText styleText={styleText}>{children}</AppText>
            <TextInput
                onChangeText={onValueChange}
                onFocus={() => {
                    props.onFocused?.();
                    setIsFocused(true);
                }}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={stylesInput}
            ></TextInput>
        </View>
    )
}
