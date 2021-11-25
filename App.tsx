import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { COLOR } from './src/assets/Theme'
import { StackNavigation } from './src/components/navigation/StackNavigation'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  )
}

export default App
