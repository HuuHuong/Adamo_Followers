import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        textAlign: 'center',
        marginBottom: 20,
    },
    itemFlatlist: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    itemImg: {
        width: 74,
        height: 74,
        borderRadius: 8,
        marginRight: 16
    },
    itemHeaderTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font18,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral10
    },
    itemTitle: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4
    }
})