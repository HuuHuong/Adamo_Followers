import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { COLOR, FakeData3, screenWidth } from '../../../assets'
import { AppButton } from '../../../components/AppButton'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'

export const Communities = (props: any) => {

    // const renderItem = ({ item }) => {
    //     return (
    //         <View>
    //             <AppIcon pathImage={item.img} />
    //             <View>
    //                 <AppText>Movies</AppText>
    //                 <AppText>{item.numMember} members</AppText>
    //             </View>
    //         </View>
    //     )
    // }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: COLOR.Neutral.Neutral0 }}
        >
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginTop: 40, width: screenWidth }}>
                    <AppText styleText={styles.headingTitle}>Communities</AppText>
                    {/* <AppSearch
                        placeholder={'Find a community'}
                        onChangeText={setTextSearch}
                        value={textSeacrh}
                    /> */}
                    {/* <AppFlatlist
                        data={FakeData3}
                        keyExtractor={item.id}
                        renderItem={renderItem}
                    /> */}

                </View>
            </View>
        </ScrollView >
    )
}
