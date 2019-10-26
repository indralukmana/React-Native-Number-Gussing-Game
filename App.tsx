import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState(0)
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (dataLoaded === false) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => console.log(error)}
      />
    )
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numberOfRounds => setGuessRounds(numberOfRounds)

  const restartGameHandler = () => {
    setUserNumber(0)
    setGuessRounds(0)
  }

  return (
    <View style={styles.screen}>
      <Header title='Number Guess' />
      {userNumber === 0 && guessRounds === 0 && (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
      {userNumber !== 0 && guessRounds === 0 && (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      )}
      {guessRounds !== 0 && (
        <GameOverScreen
          numberOfRounds={guessRounds}
          userNumber={userNumber}
          onRestart={restartGameHandler}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
