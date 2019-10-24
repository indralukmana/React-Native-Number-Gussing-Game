import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StartGameScreen = () => {
  return (
    <View style={StartGameScreenStyles.screen}>
      <Text>dumm</Text>
    </View>
  )
}

const StartGameScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
})

export default StartGameScreen
