import React, { ChangeEvent, useState } from 'react'
import {
    View,
    Text,
    TextStyle,
    TextInput,
    KeyboardTypeOptions,
    ViewStyle,
    TouchableOpacity,
    TextInputProps as InputText,
} from 'react-native'
import { COLOR, FontSize } from '../../assets'
import { AppIcon } from '../AppIcon'

interface TextInputProps extends InputText {
    placeholder?: string
    secureTextEntry?: boolean | undefined
    text?: string
    styleText?: ViewStyle | ViewStyle[] | any
    type?: string
    onValueChange?: (e: string) => void
    keyboardType?: KeyboardTypeOptions;
    style?: TextStyle | TextStyle[];
    onFocused?: () => void;
    numpad?: boolean,
    placeholderTextColor?: string,
    value?: string,
    error?: string,
    onToggle?: () => void
}

export const AppInput2 = (props: TextInputProps) => {
    const {
        text,
        placeholder,
        style,
        keyboardType,
        secureTextEntry,
        onValueChange,
        value,
        styleText,
        onFocused,
        type,
        error,
        onToggle,
        ...rest
    } = props

    const [isShowPassword, setIsShowPassword] = useState<boolean>(true)

    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={{
                fontFamily: 'NotoSans-Bold',
                fontSize: FontSize.Font16,
                color: COLOR.Neutral.Neutral4,
                marginBottom: 4
            }}>{text}</Text>
            <View style={[style, {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: COLOR.TextField,
                paddingHorizontal: 16,
                paddingVertical: 10,

                borderRadius: 8
            }]}>
                <TextInput
                    onFocus={onFocused}
                    secureTextEntry={isShowPassword}
                    style={{ width: '85%' }}
                    placeholder={placeholder}></TextInput>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsShowPassword(!isShowPassword)}
                >
                    <AppIcon
                        styleIcon={{ width: 24, height: 24 }}
                        pathImage={isShowPassword ?
                            require('../../assets/icons/EyeSlash.png') :
                            require('../../assets/icons/Eye.png')}
                    />
                </TouchableOpacity>
            </View>
            {!!error ? <Text>{error}</Text> : null}
        </View>
    )
}