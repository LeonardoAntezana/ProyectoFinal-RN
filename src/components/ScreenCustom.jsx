import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

const ScreenCustom = ({children, style}) => {
  return (
    <View style={[styles.screen, style]}>
      {children}
    </View>
  )
}

export default ScreenCustom

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors.secondary,
      alignItems: 'center',
      justifyContent: 'center', 
    }
  })