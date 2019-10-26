import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import colors from '../constants/colors'
import TitleText from '../components/TitleText'

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
      <TitleText style={styles.title}>Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
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
  title: {
    fontSize: 20,
  },
  restartButton: {
    marginVertical: 10,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default GameOverScreen
