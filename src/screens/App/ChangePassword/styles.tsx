import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    txtBtn: {
        textAlign: 'center',
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
        paddingVertical: 17,
        backgroundColor: COLOR.Primary,
        borderRadius: 8,
    }
})