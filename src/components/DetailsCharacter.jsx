import { StyleSheet, Text, Image, View } from 'react-native'
import Fonts from '../constants/Fonts';

const DetailsCharacter = ({item}) => {
  const {id, name, image, gender, species, origin, status, episode} = item;
  return (
    <>
      <Text style={styles.title}>{name}</Text>
      <Image source={{uri: image}} style={styles.image}/>
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
  },
  box: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
  },
})