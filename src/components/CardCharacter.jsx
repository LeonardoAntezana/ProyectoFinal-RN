import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const CardCharacter = ({ character, onSelected, style, showContent = true }) => {
  const {name, image} = character;

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={() => onSelected(character)}>
      <ImageBackground 
      style={styles.image} 
      imageStyle={{borderRadius: 4}} 
      source={{uri: image}}
      resizeMode='contain'
      >
        {showContent && <Text style={styles.text}>{name}</Text>}
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CardCharacter

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    margin: 7,
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