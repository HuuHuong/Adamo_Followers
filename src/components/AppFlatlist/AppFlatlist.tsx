import React, { useReducer, useRef } from 'react'
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
    listHeader?: () => any
}
export const AppFlatlist = (props: FlatListProps) => {
    const {
        data = [],
        keyExtractor,
        renderItem,
        styleFlatList,
        listHeader
    } = props

    // const scrollToIndex = () => {
    //     console.log('scroll to index called !')
    //     let index = 0
    //     data.current.scrollToIndex({ animated: true, index: index })
    //   }

    return (
        <View style={[{ flex: 1 }, styleFlatList]}>
            <FlatList
                initialScrollIndex={0}
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={listHeader}
            >
            </FlatList>
        </View>
    )
}
