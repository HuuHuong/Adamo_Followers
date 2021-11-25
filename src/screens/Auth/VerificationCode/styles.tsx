import { StyleSheet } from "react-native";
import { FontSize } from "../../../assets/Spacing";
import { COLOR } from "../../../assets/Theme";

export
    const styles = StyleSheet.create({
        headingTitle: {
            fontFamily: 'NotoSans-Bold',
            fontSize: FontSize.Font28,
            color: COLOR.Neutral.Neutral10,
            marginBottom: 6
        },
        title: {
            fontFamily: 'NotoSans-Regular',
            fontSize: FontSize.Font14,
            color: COLOR.Neutral.Neutral3
        },
        btn: {
            marginTop: 45,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR.Primary,
            borderRadius: 8
        },
        textBtn: {
            fontFamily: 'NotoSans-Bold',
            fontSize: FontSize.Font16,
            color: COLOR.Neutral.Neutral0,
            paddingTop: 17,
            paddingBottom: 17,
            marginRight: 10
        },
        footerTitle: {
            fontFamily: 'NotoSans-Regular',
            fontSize: FontSize.Font16,
            color: COLOR.Neutral.Neutral8
        }
    })