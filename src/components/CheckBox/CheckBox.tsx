import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle

} from "react-native";
import { COLOR, FontSize } from "../../assets";
import { AppIcon } from "../AppIcon";

interface CheckBoxApp {
  text: string,
  onPress: () => void,
  styleCheckBox: ViewStyle | ViewStyle[],
  styleIcon: ViewStyle | ViewStyle[]
}

export const CheckBox = (props: CheckBoxApp) => {
  const { text, onPress, styleCheckBox, styleIcon } = props
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
      <View style={[{
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 8
      }, styleCheckBox]}>
        <AppIcon styleIcon={styleIcon} pathImage={require('../../assets/icons/Check2.png')} />
      </View>
      <Text style={{
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral0,
        marginLeft: 12
      }}>{text}</Text>
    </TouchableOpacity>
  )
}