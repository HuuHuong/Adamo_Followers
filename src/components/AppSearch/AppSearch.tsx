import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements';
import {
    View,
    Text,
    TextInputProps as PropsSearch
} from 'react-native'

interface TextInputProps extends PropsSearch {
    placeholder?: string
    value: string
    onChangeText: () => any
    onFocus?: () => void;
}
export const AppSearch = (props: TextInputProps) => {
    const {
        placeholder,
        value,
        onChangeText
    } = props

    const [search, setSearch] = useState('')
    return (
        // <SearchBar
        //     placeholder={placeholder}
        //     onChangeText={onChangeText}
        //     value={value}
        // />
        <View></View>
    )
}