import { useState, useRef } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScreenCustom } from '../../components'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const SearchScreen = () => {
  const [valueSearch, setValueSearch] = useState(null)
  const searchInput = useRef(null); 
  
  const onChangeInput = value => setValueSearch(value)

  const handleOnPress = () => {
    searchInput.current.focus();
  }

  const closeKeyboard = () => Keyboard.dismiss()

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
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
      </ScreenCustom>
    </TouchableWithoutFeedback>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center'
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
  text: {
    color: '#fff',
    marginLeft: 10,
  }
})