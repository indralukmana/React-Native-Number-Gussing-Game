import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors'

const StartGameScreen = () => {
  return (
    <View style={StartGameScreenStyles.screen}>
      <Text style={StartGameScreenStyles.title}>Start a New Game!</Text>
      <Card style={StartGameScreenStyles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={StartGameScreenStyles.buttonContainer}>
          <View style={StartGameScreenStyles.button}>
            <Button title='reset' onPress={() => {}} color={colors.accent} />
          </View>
          <View style={StartGameScreenStyles.button}>
            <Button title='Confirm' onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const StartGameScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '40%',
  },
})

export default StartGameScreen
