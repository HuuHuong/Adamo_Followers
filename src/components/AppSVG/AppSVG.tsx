import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, {
    ClipPath,
    Defs,
    G,
    Path,
    Circle,
    Rect,
    Stop,
    LinearGradient,
    RadialGradient,
} from 'react-native-svg';

type iconProps = {
    width?: string;
    height?: string;
    iconFillColor?: string;
    style?: any;
    onPress?: any;
    circleFillIcon?: any;
};

export const BackIcon = ({
    style,
    iconFillColor = 'white',
    width = '24',
    height = '24',
    onPress,
}: iconProps) => {
    return (
        <View>
            <svg
                width={width}
                height={height}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 22.75L8.75 14L17.5 5.25" stroke="#191B1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </View>
    )
};

