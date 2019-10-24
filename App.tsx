import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <StartGameScreen />
      <Header title='Number Guess' />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
