import { StyleSheet } from "react-native";
import { FontSize } from "../../../assets/Spacing";
import { COLOR } from "../../../assets/Theme";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font28,
        color: COLOR.Neutral.Neutral10,
        marginBottom: 6
    },
    titleInput: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4
    },
    inputForm: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        marginTop: 4
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        paddingTop: 17,
        paddingBottom: 17
    }
})