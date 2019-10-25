import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState(0)

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return
    } else {
      setConfirmed(true)
      setSelectedNumber(chosenNumber)
      setEnteredValue('')
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={StartGameScreenStyles.screen}>
        <Text style={StartGameScreenStyles.title}>Start a New Game!</Text>
        <Card style={StartGameScreenStyles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={StartGameScreenStyles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={StartGameScreenStyles.buttonContainer}>
            <View style={StartGameScreenStyles.button}>
              <Button
                title='reset'
                onPress={resetInputHandler}
                color={colors.accent}
              />
            </View>
            <View style={StartGameScreenStyles.button}>
              <Button
                title='Confirm'
                onPress={confirmInputHandler}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmed && <Text>Chosen number: {selectedNumber}</Text>}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: 'center',
  },
})

export default StartGameScreen
