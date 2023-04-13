import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const ButtonOpacity = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonOpacity

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.secondary,
        paddingVertical: 8,
        borderRadius: 3,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
})