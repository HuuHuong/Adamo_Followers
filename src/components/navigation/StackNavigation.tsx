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
import { VerificationCode } from '../../screens/Auth/VerificationCode/VerificationCode'
import { ResetSuccess } from '../../screens/Auth/ResetPassword/ResetSuccess'
import { PurchaseCoin } from '../../screens/App/PurchaseCoin/PurchaseCoin'
import { JoinCommunity } from '../../screens/App/JoinCommunity/JoinCommunity'
import { ProfileUser } from '../../screens/App/ProfileUser/ProfileUser'
import { Approval } from '../../screens/App/Approval/Approval'
import { FriendsRequest } from '../../screens/App/FriendsRequest/FriendsRequest'
import { ChangePassword } from '../../screens/App/ChangePassword/ChangePassword'
import { BlockList } from '../../screens/App/BlockList/BlockList'

const AuthStack = createNativeStackNavigator()
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{ headerShown: false }}>
                <AuthStack.Screen name='LoginApp' component={LoginApp} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
                <AuthStack.Screen name='RegisterApp' component={RegisterApp} />
                <AuthStack.Screen name='ResetPassword' component={ResetPassword} />
                <AuthStack.Screen name='VerificationCode' component={VerificationCode} />
                <AuthStack.Screen name='ResetSuccess' component={ResetSuccess} />
                <AuthStack.Screen name='BottomNavigation' component={BottomNavigation} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

//Main App

const HomeStack = createNativeStackNavigator()
export const HomeStackNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <HomeStack.Navigator
                initialRouteName={'Home'}
                screenOptions={{ headerShown: false }}>
                <HomeStack.Screen name='Home' component={Home} />
                <HomeStack.Screen name='PurchaseCoin' component={PurchaseCoin} />
            </HomeStack.Navigator>
        </View>
    )
}

const CommunityStack = createNativeStackNavigator()
export const CommunityStackNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
                <CommunityStack.Screen name='Communities' component={Communities} />
                <CommunityStack.Screen name='JoinCommunity' component={JoinCommunity} />
            </CommunityStack.Navigator>
        </View>
    )
}

const AccountStack = createNativeStackNavigator()
export const AccountStackNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <AccountStack.Navigator screenOptions={{ headerShown: false }}>
                <AccountStack.Screen name='Account' component={Account} />
                <AccountStack.Screen name='ProfileUser' component={ProfileUser} />
                <AccountStack.Screen name='BlockList' component={BlockList} />
                <AccountStack.Screen name='Approval' component={Approval} />
                <AccountStack.Screen name='FriendsRequest' component={FriendsRequest} />
                <AccountStack.Screen name='ChangePassword' component={ChangePassword} />
            </AccountStack.Navigator>
        </View>
    )
}
