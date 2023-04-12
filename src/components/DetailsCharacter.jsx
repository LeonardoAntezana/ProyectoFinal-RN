import { StyleSheet, Text, ImageBackground, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const DetailsCharacter = ({item, onSelect, exist}) => {
  const {name, image, gender, species, originName, status, numEpisodes} = item;

  return (
    <>
      <Text style={styles.title}>{name}</Text>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <Pressable style={styles.fav} onPress={() => onSelect(item)}>
            <MaterialIcons 
            name="favorite" 
            size={28} 
            color={exist() ? 'red' : 'white'}/>
        </Pressable>
      </ImageBackground>
      <View style={styles.box}>
        <Text>Gender: {gender}</Text>
        <Text>Species: {species}</Text>
        <Text>Origin: {originName}</Text>
        <Text>Status: {status}</Text>
        <Text>Episodes: {numEpisodes}</Text>
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