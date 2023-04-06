import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const CardCharacter = ({ character, onSelected }) => {
  const {id, name, image} = character;
  
  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelected(id)}>
      <ImageBackground style={styles.image} imageStyle={{borderRadius: 4}} source={{uri: image}}>
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CardCharacter

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    paddingVertical: 5,
    backgroundColor: Colors.secondaryBlack,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    textAlign: 'center',
    fontFamily: Fonts.robotoBold,
    fontSize: 18,
    color: '#fff',  
  },

})