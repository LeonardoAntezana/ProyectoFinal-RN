import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const ButtonOpacity = ({ title, style, color = Colors.secondary, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonOpacity

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        borderRadius: 3,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
})