import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { StackNavigation } from './src/components/navigation/StackNavigation'
import { Provider, useSelector } from "react-redux";
import { store, persistor } from './src/components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BottomNavigation } from './src/components/navigation';

const App = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <StackNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App
