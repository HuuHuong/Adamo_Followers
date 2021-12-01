import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SCREEN_ROUTER } from '../../assets/route'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../../screens/App/HomeScreen/Home'
import { Communities } from '../../screens/App/Communities/Communities'
import { Account } from '../../screens/App/Account/Account'
import { COLOR } from '../../assets/Theme'
import { AppIcon } from '../AppIcon/AppIcon'
import { AccountStackNavigation, CommunityStackNavigation, HomeStackNavigation } from './StackNavigation'

const BottomTab = createBottomTabNavigator()
export const BottomNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <BottomTab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        let colorForcused;
                        if (route.name === 'HomeStackNavigation') {
                            iconName = require('../../assets/icons/HouseSimple.png');
                            colorForcused = focused ? '#FCBF84' : '#787878'
                        } else if (route.name === 'CommunityStackNavigation') {
                            iconName = require('../../assets/icons/QrCode.png');
                            colorForcused = focused ? '#FCBF84' : '#787878'
                        } else if (route.name === 'AccountStackNavigation') {
                            iconName = require('../../assets/icons/User.png');
                            colorForcused = focused ? COLOR.Primary : '#787878'
                        }
                        return <AppIcon
                            pathImage={iconName}

                        />
                    },
                    tabBarStyle: { height: 80, borderTopWidth: 2, borderColor: COLOR.Primary },
                    tabBarActiveTintColor: COLOR.Neutral.Neutral8,
                    tabBarInactiveTintColor: COLOR.Neutral.Neutral3,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        // marginBottom: 12,
                        // marginTop: 5.5,
                        paddingBottom: 12,
                        paddingTop: 5.5,
                        fontWeight: '600',
                        fontFamily: 'NotoSans-Bold'
                    },
                    headerShown: false
                })}
            >
                <BottomTab.Screen
                    name='HomeStackNavigation'
                    component={HomeStackNavigation}
                    options={{ tabBarLabel: 'Home' }}
                />
                <BottomTab.Screen
                    name='CommunityStackNavigation'
                    component={CommunityStackNavigation}
                    options={{ tabBarLabel: 'Communities' }}
                />
                <BottomTab.Screen
                    name='AccountStackNavigation'
                    component={AccountStackNavigation}
                    options={{ tabBarLabel: 'Account' }}
                />
            </BottomTab.Navigator>
        </View>
    )
}
