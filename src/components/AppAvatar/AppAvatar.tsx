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
    styleAvatar?: ViewStyle | ViewStyle[] | any,
    pathImage: ImageSourcePropType,
}

export const AppAvatar = (props: ImageProps) => {
    const {
        pathImage,
        styleAvatar,
        ...rest
    } = props
    return (
        <Image source={pathImage} style={styleAvatar} resizeMode={'cover'} />

    )
}
