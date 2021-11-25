import React from 'react'
import { View, Text } from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { SCREEN_ROUTER } from '../../../assets/route'
import { useNavigation } from '@react-navigation/core'

type RegisterScreen = NativeStackNavigationProp<SCREEN_ROUTER , 'RegisterApp'>
const navigation = useNavigation<RegisterScreen>()

export const RegisterApp = () => {
    return (
        <View>
            <Text>aaaaaa</Text>
        </View>
    )
}
