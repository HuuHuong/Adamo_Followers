import React from 'react'
import {
    View,
    Text,
    FlatListProps as PropsList,
    FlatList
} from 'react-native'

interface FlatListProps {
    data: any[],

}
export const AppFlatlist = (props: FlatListProps) => {
    const { data } = props

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
            >
            </FlatList>
        </View>
    )
}
