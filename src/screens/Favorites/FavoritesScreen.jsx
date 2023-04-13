import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../../store/actions/favorites.action'
import { StyleSheet, FlatList, Text } from 'react-native'
import { ScreenCustom, CardCharacter } from '../../components'
import Fonts from '../../constants/Fonts'

const FavoritesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.favorites.favorites)
  
  useEffect(() => {
    dispatch(loadFavorites());
  }, []);

  const handleSelect = item => {
    navigation.navigate('Details', {...item})
  }

  const renderCharacter = ({item}) => (
    <CardCharacter character={item} onSelected={handleSelect} style={styles.card}/>
  )

  if(state.length === 0){
    return (
      <ScreenCustom style={styles.screen}>
        <Text style={styles.text}>No hay favoritos aun</Text>
      </ScreenCustom>
    )
  }

  return (
    <ScreenCustom>
      <FlatList
      data={state}
      renderItem={renderCharacter}
      keyExtractor={(item) => item.id}
      />
    </ScreenCustom>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: Fonts.robotoRegular
  },
  card: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
})