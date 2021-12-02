import React from 'react'
import {
    View,
    Text,
    TextStyle,
    TextProps as PropsText,
    ViewStyle,
    TouchableOpacity
} from 'react-native'
import { COLOR, FontSize } from '../../assets'
import { AppIcon } from '../AppIcon'
import { BackIcon } from '../AppSVG/AppSVG'

interface TextProps extends PropsText {
    text?: string,
    styles?: ViewStyle | ViewStyle[],
    onPress?: () => void
}
export const AppHeader = (props: TextProps) => {
    const {
        text,
        onPress,
        ...rest

    } = props
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 36
        }}>
            <TouchableOpacity onPress={onPress}>
                <AppIcon pathImage={require('../../assets/icons/CaretLeft.png')} />
            </TouchableOpacity>
            {/* <BackIcon onPress={onPress} /> */}
            <Text style={{
                fontFamily: 'NotoSans-Bold',
                fontSize: FontSize.Font24,
                color: COLOR.Neutral.Neutral10,
                textAlign: 'center',
                flex: 1
            }}>{text}</Text>
        </View>
    )
}
