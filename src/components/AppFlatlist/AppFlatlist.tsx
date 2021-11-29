import React from 'react'
import {
    View,
    Text,
    FlatListProps as PropsList,
    FlatList,
    SectionListRenderItem
} from 'react-native'

interface FlatListProps {
    data: any[],
    renderItem: (e: any) => any;
    keyExtractor: any

}
export const AppFlatlist = (props: FlatListProps) => {
    const {
        data,
        keyExtractor,
        renderItem
    } = props

    return (
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
    )
}
