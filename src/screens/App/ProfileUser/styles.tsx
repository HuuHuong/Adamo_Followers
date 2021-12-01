import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral0
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15
    },
    textUser: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.DarkPrimary
    },
    userID: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral6
    },
})