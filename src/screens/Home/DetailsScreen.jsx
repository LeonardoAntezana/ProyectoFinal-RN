import { StyleSheet } from 'react-native'
import { useCallApi } from '../../hooks/useCallApi';
import BASE_URL from '../../constants/Request'
import { ScreenCustom } from '../../components'
import { DetailsCharacter } from '../../components';

const DetailsScreen = ({route}) => {
  const {params} = route;

  const { data } = useCallApi(`${BASE_URL}/character/${params.id}`)

  return (
    <ScreenCustom style={styles.screen}>
      {data && <DetailsCharacter item={data}/>}
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