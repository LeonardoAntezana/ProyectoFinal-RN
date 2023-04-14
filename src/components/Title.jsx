import { StyleSheet, Text } from 'react-native'
import Fonts from '../constants/Fonts'

const Title = ({ text, style }) => {
  return (
    <>
      <Text style={[styles.text, style]}>{text}</Text>
    </>
  )
}

export default Title

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Fonts.robotoBold,
        color: '#fff',
        marginVertical: 25,
        marginTop: 50,
    }
})