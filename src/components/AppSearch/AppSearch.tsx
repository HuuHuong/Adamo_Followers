import React, { useState } from 'react'
import {
    View,
    Text,
    TextInputProps as PropsSearch,
    TextInput,
    StyleSheet,
    ViewStyle
} from 'react-native'
import { AppIcon } from '../AppIcon';
import { COLOR } from '../../assets';
import { AppButton } from '../AppButton';

interface TextInputProps extends PropsSearch {
    placeholder?: string
    value: string
    onChangeText?: (e: string) => void
    onFocus?: () => void;
    type?: string,
    onPress?: () => void
}
export const AppSearch = (props: TextInputProps) => {
    const {
        placeholder,
        value,
        onChangeText,
        type,
        onPress
    } = props

    const [search, setSearch] = useState('')
    return (
        <View style={styles.searchForm}>
            <AppIcon
                styleIcon={styles.iconSearch}
                pathImage={require('../../assets/icons/search.png')} />
            <TextInput
                style={{ width: '72%' }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}></TextInput>
            {type === 'filter' && (
                <View>
                    <AppButton
                        onPress={onPress}
                        styleBtn={{ flexDirection: 'row' }}
                        pathImage={require('../../assets/icons/filter.png')}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    searchForm: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.TextField,
        borderRadius: 8,
        width: '100%'
    },
    iconSearch: {
        marginVertical: 17,
        marginHorizontal: 17,

    }
})