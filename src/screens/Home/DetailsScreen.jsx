import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/actions/favorites.action'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { DetailsCharacter } from '../../components';
import Colors from '../../constants/Colors';

const { height } = Dimensions.get('screen');

const DetailsScreen = ({ route }) => {
  const { params } = route;

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const favoriteExists = () => favorites.some(elem => elem.id === params.id);

  const handleFav = (item) => favoriteExists() ? dispatch(deleteFavorite(item.id)) : dispatch(addFavorite(item))

  return (
    <ScrollView 
    style={styles.screen}
    contentContainerStyle={styles.container}>
        <DetailsCharacter item={params} onSelect={handleFav} exist={favoriteExists} />
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 50,
    backgroundColor: Colors.secondary
  },
  container: {
    flex: height > 600 ? 1 : 0,
    height: height < 600 ? height : 'auto',
    justifyContent: height > 600 ? 'center' : 'flex-start'
  }
})