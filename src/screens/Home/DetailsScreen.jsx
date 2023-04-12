import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/actions/favorites.action'
import { StyleSheet } from 'react-native'
import { ScreenCustom } from '../../components'
import { DetailsCharacter } from '../../components';

const DetailsScreen = ({route}) => {
  const {params} = route;
  
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const favoriteExists = () => favorites.some(elem => elem.id === params.id);

  const handleFav = (item) => favoriteExists() ? dispatch(deleteFavorite(item.id)) : dispatch(addFavorite(item))

  return (
    <ScreenCustom style={styles.screen}>
      <DetailsCharacter item={params} onSelect={handleFav} exist={favoriteExists}/>
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