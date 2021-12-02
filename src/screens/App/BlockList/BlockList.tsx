import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { COLOR } from '../../../assets'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppHeader } from '../../../components/AppHeader/AppHeader'
import { Block_List } from '../../../services/API'

export const BlockList = (props: any) => {
    const { navigation } = props
    useEffect(() => {
        const getBlockList = async () => {
            try {
                const response = await Block_List()
                console.log(response);

            } catch (error) {
                console.error({ error });

            }
        }
        getBlockList()
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}>
            <View style={{ paddingHorizontal: 24 }}>
                <AppHeader
                    onPress={() => navigation.goBack()}
                    text={'Block List'} />
                {/* <AppFlatlist 
                    
                    /> */}
            </View>
        </View>
    )
}