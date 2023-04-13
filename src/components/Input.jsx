import React from 'react'
import { StyleSheet, TextInput, Text } from 'react-native'
import Fonts from '../constants/Fonts'

const Input = ({ onChange, stateValue, type = 'default', label, placeholder, maxLength, ...moreProps }) => {
  
  return (
   <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
    style={styles.input}
    keyboardType={type}
    onChangeText={onChange}
    placeholder={placeholder}
    maxLength={maxLength}
    {...moreProps}
    />
   </>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    width: '100%',
    fontFamily: Fonts.robotoBold,
    fontSize: 16,
    marginBottom: 5,
    marginTop: 25,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 8,
    height: 40,
    backgroundColor: '#eee'
  },
  error: {
    marginTop: 5,
    color: 'red',
  }
})