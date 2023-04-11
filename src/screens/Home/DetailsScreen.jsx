import { StyleSheet } from 'react-native'
import { ScreenCustom } from '../../components'
import { DetailsCharacter } from '../../components';

const DetailsScreen = ({route}) => {
  
  const {params} = route;

  return (
    <ScreenCustom style={styles.screen}>
      <DetailsCharacter item={params}/>
    </ScreenCustom>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})