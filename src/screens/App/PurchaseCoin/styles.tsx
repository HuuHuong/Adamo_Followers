import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    headingTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
    },
    txtCost: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font20,
        color: COLOR.Sematic.Sematic1,
        position: 'absolute',
        marginLeft: 65,
    },
    title: {
        marginTop: 4,
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral6
    },
    currentCoin: {
        marginTop: 16,
        marginBottom: 40,
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font36,
        color: COLOR.Sematic.Sematic1,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR.Neutral.Neutral3
    },
    rulesFooter: {
        marginTop: 16,
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral6
    }

})