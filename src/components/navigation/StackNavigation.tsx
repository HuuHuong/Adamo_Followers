import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginApp } from '../../screens/Auth/Login/LoginApp'
import { ForgotPassword } from '../../screens/Auth/ForgotPassword/ForgotPassword'
import { RegisterApp } from '../../screens/Auth/Register/RegisterApp'
import { ResetPassword } from '../../screens/Auth/ResetPassword/ResetPassword'
import { BottomNavigation } from './BottomNavigation'
import { Home } from '../../screens/App/HomeScreen/Home'
import { Communities } from '../../screens/App/Communities/Communities'
import { Account } from '../../screens/App/Account/Account'
import { SCREEN_ROUTER } from '../../assets/route'

const AuthStack = createNativeStackNavigator()
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{ headerShown: true }}>
                <AuthStack.Screen name='LoginApp' component={LoginApp} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
                <AuthStack.Screen name='RegisterApp' component={RegisterApp} />
                <AuthStack.Screen name='ResetPassword' component={ResetPassword} />
                <AuthStack.Screen name='BottomNavigation' component={BottomNavigation} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

//Main App

const HomeStack = createNativeStackNavigator()
export const HomeStackNavigation = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name='Home' component={Home} />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

const CommunityStack = createNativeStackNavigator()
export const CommunityStackNavigation = () => {
    return (
        <NavigationContainer>
            <CommunityStack.Navigator>
                <CommunityStack.Screen name='Communities' component={Communities} />
            </CommunityStack.Navigator>
        </NavigationContainer>
    )
}

const AccountStack = createNativeStackNavigator()
export const AccountStackNavigation = () => {
    return (
        <NavigationContainer>
            <AccountStack.Navigator>
                <AccountStack.Screen name='Account' component={Account} />
            </AccountStack.Navigator>
        </NavigationContainer>
    )
}
