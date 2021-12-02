import React from 'react'
import {
    View,
    Text,
    FlatListProps as PropsList,
    FlatList,
    ListRenderItem,
    ViewStyle,
} from 'react-native'

interface FlatListProps {
    data: any[] | undefined,
    renderItem: ListRenderItem<any>;
    keyExtractor?: any,
    styleFlatList?: ViewStyle | ViewStyle[] | any

}
export const AppFlatlist = (props: FlatListProps) => {
    const {
        data,
        keyExtractor,
        renderItem,
        styleFlatList
    } = props

    return (
        <View style={[{ flex: 1 }, styleFlatList]}>
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
