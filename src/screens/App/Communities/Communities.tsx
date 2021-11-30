import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { COLOR, FakeData3, screenWidth } from '../../../assets'
import { AppButton } from '../../../components/AppButton'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppIcon } from '../../../components/AppIcon'
import { AppSearch } from '../../../components/AppSearch'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
export const Communities = (props: any) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const communityForum = (item: any) => () => {
        return (
            dispatch({ type: 'COMMUNITY_FORUM', payLoad: item }),
            navigation.navigate('JoinCommunity')
        )
    }
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={communityForum(item)}
                style={styles.itemFlatlist}>
                <AppIcon styleIcon={styles.itemImg} pathImage={item.img} />
                <View>
                    <AppText styleText={styles.itemHeaderTitle}>{item.title}</AppText>
                    <AppText styleText={styles.itemTitle}>{item.numMember} members</AppText>
                </View>
            </TouchableOpacity>
        )
    }
    const [textSearch, setTextSearch] = useState('')
    return (
        <View style={{
            backgroundColor: COLOR.Neutral.Neutral0,
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 24
        }}>
            <AppText styleText={styles.headingTitle}>Communities</AppText>
            <AppSearch
                onChangeText={setTextSearch}
                placeholder={'Find a community'}
                value={textSearch}

            />
            <AppFlatlist
                styleFlatList={{ marginTop: 16, width: '100%' }}
                data={FakeData3}
                // keyExtractor={item?.id}
                renderItem={renderItem}

            ></AppFlatlist>
        </View >
    )
}
