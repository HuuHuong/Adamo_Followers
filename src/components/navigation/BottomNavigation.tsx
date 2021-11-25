import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AccountStackNavigation, CommunityStackNavigation, HomeStackNavigation } from './StackNavigation'
import { SCREEN_ROUTER } from '../../assets/route'
import { NavigationContainer } from '@react-navigation/native'

const BottomTab = createBottomTabNavigator()
export const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name='HomeStackNavigation' component={HomeStackNavigation} />
                <BottomTab.Screen name='CommunityStackNavigation' component={CommunityStackNavigation} />
                <BottomTab.Screen name='AccountStackNavigation' component={AccountStackNavigation} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}
