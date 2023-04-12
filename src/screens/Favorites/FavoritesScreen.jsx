import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../../store/actions/favorites.action'
import { StyleSheet, FlatList } from 'react-native'
import { ScreenCustom, CardCharacter } from '../../components'

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
  card: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
})