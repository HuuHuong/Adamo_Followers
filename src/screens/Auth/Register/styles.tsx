import { StyleSheet } from "react-native";
import { FontSize } from "../../../assets/Spacing";
import { COLOR } from "../../../assets/Theme";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        left: '100%'
    },
    headingTitle2: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        marginTop: 35,
        marginBottom: 4
    },
    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        color: COLOR.Neutral.Neutral3,
        marginBottom: 8
    },
    titleInput: {
        marginBottom: 4,
        fontFamily: 'NotoSans-Regular',
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4,
        fontSize: FontSize.Font16
    },
    inputForm: {
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 15,
        paddingLeft: 16,
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
        marginRight: 10,
        marginTop: 16,
        marginBottom: 16
    },
    btn: {
        backgroundColor: COLOR.Primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 80
    }
})