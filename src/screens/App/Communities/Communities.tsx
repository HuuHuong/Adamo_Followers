import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { COLOR, FakeData3, screenWidth } from '../../../assets'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppIcon } from '../../../components/AppIcon'
import { AppSearch } from '../../../components/AppSearch'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { Category_App } from '../../../services/API'
export const Communities = (props: any) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [listCategories, setListCategories] = useState()
    const communityForum = (item: any) => () => {
        return (
            dispatch({ type: 'COMMUNITY_FORUM', payLoad: item }),
            navigation.navigate('JoinCommunity')
        )
    }

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await Category_App()
                setListCategories(response.data.data.categories.data)
                console.log(response);

            } catch (error) {
                console.error({ error });

            }
        }
        getCategories()
    }, [])
    console.log(listCategories);

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={communityForum(item)}
                style={styles.itemFlatlist}>
                <AppIcon styleIcon={styles.itemImg} pathImage={{ uri: item.image }} />
                <View>
                    <AppText styleText={styles.itemHeaderTitle}>{item.title}</AppText>
                    <AppText styleText={styles.itemTitle}>{item.total_members} members</AppText>
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
                data={listCategories}
                // keyExtractor={item?.id}
                renderItem={renderItem}

            ></AppFlatlist>
        </View >
    )
}
