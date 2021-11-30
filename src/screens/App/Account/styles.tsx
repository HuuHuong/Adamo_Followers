import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 40
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 48
    },
    userName: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral10
    },
    userID: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral6
    },
    btn: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        borderBottomColor: COLOR.Neutral.Neutral3,
        borderBottomWidth: 1
    },
    title: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral10,
        marginLeft: 16

    }
})