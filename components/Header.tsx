import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.title}>{title}</Text>
    </View>
  )
}

const HeaderStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
})

export default Header
