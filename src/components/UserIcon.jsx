import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const UserIcon = ({ navigation, letter }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={() => console.log('click')}>
      <Text style={styles.text}>{letter}</Text>
    </TouchableOpacity>
  )
}

export default UserIcon;

const styles = StyleSheet.create({
    icon: {
      backgroundColor: Colors.primary,
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderRadius: 35,
      borderWidth: 1,
      borderColor: '#fff',
    },
    text: {
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 20,
    }
})