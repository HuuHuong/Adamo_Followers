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
    itemList: {
        flexDirection: 'row',
        backgroundColor: COLOR.TextField,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 100,
        alignItems: 'center'
    },
    txtItemList: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font15,
        marginLeft: 12
    },
    textItemSocial: {
        marginLeft: 16,
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral10,
    },
    headingTitle2: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        marginTop: 48,
        marginBottom: 20
    },
    titleIntro: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral6
    },
    imgCommunity: {
        width: 48,
        height: 48,
        borderRadius: 12,
        paddingVertical: 10,
    },
    textCommunity: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        marginLeft: 16
    },
    notiFollowers: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral0,
        marginLeft: 10
    },
    textNoti: {
        fontSize: FontSize.Font16,
        color: COLOR.Neutral.Neutral0,
    },
    btnFooter: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        backgroundColor: COLOR.Neutral.Neutral1,
        paddingVertical: 20,
        marginBottom: 12,
        borderRadius: 8
    },
    titleFooter: {
        fontFamily: 'NotoSans-Regular',
        fontWeight: '500',
        fontSize: FontSize.Font18,
        color: COLOR.Neutral.Neutral10
    },
    numReminders: {
        fontFamily: 'NotoSans-Bold',
        fontWeight: '700',
        fontSize: FontSize.Font12,
        color: COLOR.Neutral.Neutral0,
        // backgroundColor: COLOR.DarkPrimary,
        // padding: 10,
        // borderRadius: 50

    }
})