import React, { useState } from 'react'
import { View, StyleSheet, ViewStyle } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { COLOR, FontSize } from '../../assets';
import { AppText } from '../AppText';

interface PickerProps {
    selectedValue?: string[] | number[] | any
    onValueChange?: (itemValue: any, itemIndex: number) => void;
    stylePicker?: ViewStyle | ViewStyle[] | any
    arrayValue: any[]
    children?: string
    styleChildren?: ViewStyle | ViewStyle[] | any
    currentValue?: string[]
}

export const AppPicker = (props: PickerProps) => {
    const {
        onValueChange,
        stylePicker,
        arrayValue,
        children,
        currentValue,
        styleChildren
    } = props
    const [selectedValue] = useState(arrayValue);
    return (
        <View style={{ width: '47.5%' }}>
            <AppText styleText={styles.txt}>{children}</AppText>
            <View style={[stylePicker, styles.pickerForm]}>
                <Picker
                    itemStyle={stylePicker}
                    mode={'dropdown'}
                    selectedValue={currentValue}
                    onValueChange={onValueChange}>
                    {
                        selectedValue.map(label => {
                            return <Picker.Item style={styles.itemPicker} label={label} value={label} />
                        })
                    }
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 16,
        marginBottom: 4,
        fontFamily: 'NotoSans-Regular',
        fontWeight: '500',
        color: COLOR.Neutral.Neutral4,
        fontSize: FontSize.Font16,
    },
    pickerForm: {
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        paddingTop: 6.5,
        paddingBottom: 4.5,

    },
    itemPicker: {
        fontFamily: 'NotoSans-Regular',
        color: COLOR.Neutral.Neutral10
    }
})
