import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    introUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgAvatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 20
    },
    hello: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral6,
        fontWeight: '400'
    },
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10
    },
    newsNoti: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.TextField,
        borderRadius: 16,
        marginTop: 35
    },
    iconSpeaker: {
        width: 42,
        height: 42,
        transform: [{ rotate: "-15deg" }],
        padding: 5,
        marginTop: 32,
        marginBottom: 45,
        marginLeft: 16,
        marginRight: 20
    },
    newsHeading: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        color: COLOR.Primary,
        marginBottom: 8
    },
    newsTitle: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        color: COLOR.Neutral.Neutral6
    },
    imgCate: {
        width: 74,
        height: 74,
        borderRadius: 12
    },
    itemCateHeader: {
        fontFamily: 'NotoSans-Bold',
        color: COLOR.Neutral.Neutral10,
        fontSize: FontSize.Font18,
    },
    ietamCateTitle: {
        fontFamily: 'NotoSans-Regular',
        color: COLOR.Neutral.Neutral4,
        fontWeight: '500',
        fontSize: FontSize.Font14,
        marginTop: 4
    },
    seeAll: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 30
    },
    txtBtn: {
        fontFamily: 'NotoSans-Bold',
        color: COLOR.Primary,
        fontSize: FontSize.Font16
    },
    btn: {
        backgroundColor: COLOR.Neutral.Neutral1,
        borderRadius: 8,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        marginTop: 12,
        alignItems: 'center'
    },
    titleBtn: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral10
    },
    iconBtnFooter: {
        marginHorizontal: 18,
        marginVertical: 20
    }
})