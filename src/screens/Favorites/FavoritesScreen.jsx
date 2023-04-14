import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../../store/actions/favorites.action'
import { StyleSheet, FlatList } from 'react-native'
import { ScreenCustom, CardCharacter, Title } from '../../components'

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
        <Title text='No hay favoritos aun' style={styles.text}/>
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
    textTransform: 'uppercase',
    marginTop: 0,
  },
  card: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
})