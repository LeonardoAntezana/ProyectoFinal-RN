import { useDispatch } from 'react-redux'
import { userSetImage } from '../../store/actions/user.actions'
import { ScreenCustom } from '../../components'
import { StyleSheet } from 'react-native'
import { ImageSelector } from '../../components'

const CameraScreen = () => {

  const dispatch = useDispatch();

  const setImageUser = uri => {
    dispatch(userSetImage(uri));
  } 

  return (
    <ScreenCustom style={styles.screen}>
        <ImageSelector onSelect={setImageUser}/>
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