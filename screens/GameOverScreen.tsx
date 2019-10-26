import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type GameOverScreenProps = {
  numberOfRounds: number
  userNumber: number
}

const GameOverScreen = ({
  numberOfRounds,
  userNumber,
}: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of Rounds: {numberOfRounds}</Text>
      <Text>User Number: {userNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameOverScreen
