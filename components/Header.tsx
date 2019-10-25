import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../constants/colors'

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
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
})

export default Header
