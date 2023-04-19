import { StyleSheet, Text, ImageBackground, View, Pressable, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('screen');

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
    textAlign: 'center',
    fontFamily: Fonts.robotoBold,
    fontSize: 22,
    color: '#fff',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: height > 700 ? 250 : 200,
    alignItems: 'flex-end',
  },
  box: {
    marginVertical: 15,
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
  },
  fav: {
    padding: 6,
    backgroundColor: Colors.primary,
  },
})