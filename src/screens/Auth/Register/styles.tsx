import { StyleSheet } from "react-native";
import { FontSize } from "../../../assets/Spacing";
import { COLOR } from "../../../assets/Theme";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        marginVertical: 'auto',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        zIndex: -1
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
    pickerForm: {
        width: '100%'
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
        marginBottom: 80,
        flexDirection: 'row'
    }
})