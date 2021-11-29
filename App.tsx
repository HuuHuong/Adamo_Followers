import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { COLOR } from './src/assets/Theme'
import { StackNavigation } from './src/components/navigation/StackNavigation'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from './src/components/redux/rootReducer';

let store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store} >
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigation />
      </SafeAreaView>
    </Provider>
  )
}

export default App
