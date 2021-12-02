import { StyleSheet } from "react-native";
import { COLOR, FontSize } from "../../../assets";

export const styles = StyleSheet.create({
    headingTitle: {
        flex: 1,
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font24,
        color: COLOR.Neutral.Neutral10,
        textAlign: 'center'
    },
    avt: {
        width: 52,
        height: 52,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: COLOR.Sematic.Sematic1,
    },
    username: {
        fontFamily: 'NotoSans-Bold',
        fontSize: FontSize.Font16,
        color: COLOR.DarkPrimary,
        marginBottom: 4
    },
    numFriends: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font16,
        fontWeight: '400',
        color: COLOR.Neutral.Neutral6,
        marginRight: 4
    },
    imgCommunities: {
        width: 24,
        height: 24,
        borderRadius: 100,
        marginRight: 8,
        marginBottom: 4
    },
    textCommunities: {
        fontFamily: 'NotoSans-Regular',
        fontSize: FontSize.Font14,
        fontWeight: '500',
        color: COLOR.Neutral.Neutral8
    }
})