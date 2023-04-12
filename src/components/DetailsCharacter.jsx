import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../store/actions/favorites.action';
import { StyleSheet, Text, ImageBackground, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const DetailsCharacter = ({item}) => {
  const {id, name, image, gender, species, origin, status, episode} = item;
  
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const favoriteExists = () => favorites.some(elem => elem.id === id);

  const handleFav = (item) => favoriteExists() ? dispatch(deleteFavorite(item.id)) : dispatch(addFavorite(item));

  return (
    <>
      <Text style={styles.title}>{name}</Text>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <Pressable style={styles.fav} onPress={() => handleFav(item)}>
            <MaterialIcons 
            name="favorite" 
            size={28} 
            color={favoriteExists() ? 'red' : 'white'}/>
        </Pressable>
      </ImageBackground>
      <View style={styles.box}>
        <Text>Gender: {gender}</Text>
        <Text>Species: {species}</Text>
        <Text>Origin: {origin.name}</Text>
        <Text>Status: {status}</Text>
        <Text>Episodes: {episode.length}</Text>
      </View>
    </>
  )
}

export default DetailsCharacter

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.robotoBold,
    fontSize: 22,
    color: '#fff',
  },
  image: {
    marginVertical: 30,
    width: '100%',
    height: 250,
    alignItems: 'flex-end',
  },
  box: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
  },
  fav: {
    padding: 6,
    backgroundColor: Colors.primary,
  },
})