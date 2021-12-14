import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';

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
}: iconProps) => (
  <Svg
    onPress={onPress}
    style={style}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M14.845 20.3375C14.655 20.3375 14.465 20.2675 14.315 20.1175L7.795 13.5975C6.735 12.5375 6.735 10.7975 7.795 9.7375L14.315 3.2175C14.605 2.9275 15.085 2.9275 15.375 3.2175C15.665 3.5075 15.665 3.9875 15.375 4.2775L8.855 10.7975C8.375 11.2775 8.375 12.0575 8.855 12.5375L15.375 19.0575C15.665 19.3475 15.665 19.8275 15.375 20.1175C15.225 20.2575 15.035 20.3375 14.845 20.3375Z"
      fill={iconFillColor}
    />
  </Svg>
);