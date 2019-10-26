import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.titleStyle, ...style }}>{children}</Text>
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'open-sans-bold',
  },
})

export default TitleText
