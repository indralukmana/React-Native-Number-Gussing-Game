import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import colors from '../constants/colors'

type GameOverScreenProps = {
  numberOfRounds: number
  userNumber: number
  onRestart: () => void
}

const GameOverScreen = ({
  numberOfRounds,
  userNumber,
  onRestart,
}: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of Rounds: {numberOfRounds}</Text>
      <Text>User Number: {userNumber}</Text>
      <View style={styles.restartButton}>
        <Button title='Restart' color={colors.primary} onPress={onRestart} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartButton: {
    marginVertical: 10,
  },
})

export default GameOverScreen
