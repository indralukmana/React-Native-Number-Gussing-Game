import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({ children, style = {} }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    // android elevation
    elevation: 5,

    // ios shadow
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
})

export default Card
