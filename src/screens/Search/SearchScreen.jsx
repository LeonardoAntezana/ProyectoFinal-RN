import { useState, useRef, useEffect } from 'react'
import BASE_URL from '../../constants/Request'
import { StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { ScreenCustom, CardCharacter } from '../../components'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const { height } = Dimensions.get('screen');

const SearchScreen = ({ navigation }) => {

  const [characters, setCharacters] = useState([])
  const [valueSearch, setValueSearch] = useState(null)  
  const searchInput = useRef(null); 

  const getData = async () => {
    if(valueSearch){
      const res = await fetch(`${BASE_URL}/character/?name=${valueSearch}`);
      const data = await res.json();
      setCharacters(data.results)
    }
    else{
      setValueSearch('')
      setCharacters([])
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => getData(), 900)
    
    return () => clearTimeout(timeout);
  }, [valueSearch])

  const onChangeInput = value => setValueSearch(value.toLowerCase())

  const handleOnPress = () => {
    searchInput.current.focus();
  }

  const handleSelect = item => {
    const {id, name, image, gender, species, origin, status, episode} = item
    navigation.navigate('Details', {id, name, image, gender, species, originName: origin.name, status, numEpisodes: episode.length})
  }

  const renderItem = ({ item }) => (
    <CardCharacter character={item} onSelected={handleSelect} style={styles.card}/>
  )

  return (
      <ScreenCustom style={styles.screen}>
        <TouchableOpacity style={styles.box} onPress={handleOnPress}>
          <Ionicons name='search-outline' size={20} color='#fff'/>
          <TextInput
          ref={searchInput}
          style={styles.text}
          placeholder='Buscar personaje'
          placeholderTextColor='#fff'
          onChangeText={onChangeInput}
          maxLength={20}
          />
        </TouchableOpacity>
        <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </ScreenCustom>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    paddingBottom: height > 600 ? 80 : 70,
  },
  box: {
    marginVertical: 20,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.secondaryBlack,
  },
  card:{
    height: height / 3 ,
  },
  text: {
    color: '#fff',
    marginLeft: 10,
  }
})