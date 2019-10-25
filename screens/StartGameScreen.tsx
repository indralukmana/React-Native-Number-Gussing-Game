import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'

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
      Alert.alert('Invalid Number!', 'Number has to be between 1 to 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ])
      return
    } else {
      setConfirmed(true)
      setSelectedNumber(chosenNumber)
      setEnteredValue('')
      Keyboard.dismiss()
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
        {confirmed && (
          <Card style={StartGameScreenStyles.summaryContainer}>
            <Text>You have chosen</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='START' onPress={() => {}} />
          </Card>
        )}
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
  summaryContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
})

export default StartGameScreen
