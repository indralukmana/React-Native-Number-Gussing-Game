import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = () => {
  return (
    <View style={StartGameScreenStyles.screen}>
      <Text style={StartGameScreenStyles.title}>Start a New Game!</Text>
      <View style={StartGameScreenStyles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={StartGameScreenStyles.buttonContainer}>
          <Button title='reset' onPress={() => {}} />
          <Button title='Confirm' onPress={() => {}} />
        </View>
      </View>
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

    // android elevation
    elevation: 5,

    // ios shadow
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default StartGameScreen
