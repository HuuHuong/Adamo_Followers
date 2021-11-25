import React from 'react'
import {
    View,
    Text,
    ImageProps as PropsImage,
    ImageSourcePropType,
    ViewStyle,
    Image
} from 'react-native'
interface ImageProps {
    styleIcon?: ViewStyle | ViewStyle[] | any,
    pathImage: ImageSourcePropType,
}

export const AppIcon = (props: ImageProps) => {
    const {
        pathImage,
        styleIcon,
        ...rest
    } = props
    return (
        <View>
            <Image source={pathImage} style={styleIcon} resizeMode={'cover'} />
        </View>
    )
}
