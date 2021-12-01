import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: 205,
        backgroundColor: 'rgba(0, 0, 0, 0,3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral0
    },
    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral2
    },
    btn: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginTop: 30,
        borderRadius: 8,
    },
    textBtn: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
    },
    forumHeading: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral10
    },
    forumTitle: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral6,
        marginTop: 9,
        paddingRight: 20,
    },
    forumNoti: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '500',
        color: COLOR.Primary,
        paddingHorizontal: 10,
    },
    headingSection: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        marginBottom: 25
    }
})