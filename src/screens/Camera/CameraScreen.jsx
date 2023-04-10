import { ScreenCustom } from '../../components'
import { StyleSheet, Text, View } from 'react-native'
import { ImageSelector } from '../../components'

const CameraScreen = () => {
  return (
    <ScreenCustom style={styles.screen}>
        <ImageSelector/>
    </ScreenCustom>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
})