import React, { ChangeEvent } from 'react'
import {
    View,
    Text,
    TextInput,
    TextStyle,
    KeyboardTypeOptions,
    ViewStyle,
    TouchableOpacity
} from 'react-native'
import { AppIcon } from '../AppIcon'
import { AppText } from '../AppText/AppText'

interface InputProps {
    placeholder?: string
    secureTextEntry?: boolean
    children?: string
    styleText?: ViewStyle | ViewStyle[] | any
    type?: string
    onValueChange?: (e: string) => void
    keyboardType?: KeyboardTypeOptions;
    stylesInput?: ViewStyle | ViewStyle[];
    onFocused?: () => void;
    numpad?: boolean,
    placeholderTextColor?: string,
    value?: string,
    error?: string
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
        type,
        error,
        ...rest
    } = props

    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ marginTop: 16 }}>
            {children ? <AppText styleText={styleText}>{children}</AppText> : null}
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
            {error ? <Text>{error}</Text> : null}

        </View>
    )
}
