import { StyleSheet } from "react-native";
import { FontSize } from "../../../assets/Spacing";
import { COLOR } from "../../../assets/Theme";

export
    const styles = StyleSheet.create({
        logo: {
            width: 50,
            height: 50,
        },
        headingTitle: {
            marginTop: 67,
            fontFamily: 'NotoSans-Bold',
            fontSize: FontSize.Font28,
            color: COLOR.Neutral.Neutral10
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
            paddingBottom: 16,
            paddingLeft: 16,
        },
        btn: {
            backgroundColor: COLOR.Primary,
            borderRadius: 8,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        },
        textBtn: {
            paddingTop: 17,
            paddingBottom: 17,
            fontSize: FontSize.Font16,
            color: COLOR.Neutral.Neutral0,
            fontWeight: '600',
            fontFamily: 'NotoSans-Bold',
            marginRight: 10
        },
        footerTitle: {
            fontSize: FontSize.Font16,
            color: COLOR.Neutral.Neutral8,
            fontWeight: '500'
        }
    })