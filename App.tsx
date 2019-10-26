import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState(0)
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numberOfRounds => setGuessRounds(numberOfRounds)

  return (
    <View style={styles.screen}>
      <Header title='Number Guess' />
      {userNumber === 0 && guessRounds === 0 && (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
      {userNumber !== 0 && guessRounds === 0 && (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      )}
      {guessRounds !== 0 && <GameOverScreen />}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
