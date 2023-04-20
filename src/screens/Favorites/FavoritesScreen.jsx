import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../../store/actions/favorites.action'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import { ScreenCustom, CardCharacter, Title } from '../../components'

const { height, width } = Dimensions.get('screen');

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
      <ScreenCustom style={[styles.screen, styles.noFavorites]}>
        <Title text='No hay favoritos aun' style={styles.text}/>
      </ScreenCustom>
    )
  }

  return (
    <ScreenCustom style={styles.screen}>
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
    paddingBottom: 70,
  },
  noFavorites: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    marginTop: 0,
  },
  card: {
    marginHorizontal: width - width * 0.85,
    marginVertical: 20,
    height: height * 0.3
  },
})