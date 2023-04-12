import { useSelector } from 'react-redux'
import { StyleSheet, FlatList } from 'react-native'
import { ScreenCustom, CardCharacter } from '../../components'

const FavoritesScreen = ({ navigation }) => {
  const state = useSelector(state => state.favorites.favorites)

  const handleSelect = item => {
    navigation.navigate('Details', {...item})
  }

  const renderCharacter = ({item}) => (
    <CardCharacter character={item} onSelected={handleSelect}/>
  )

  return (
    <ScreenCustom>
      <FlatList
      data={state}
      renderItem={renderCharacter}
      keyExtractor={(item) => item.id}
      />
    </ScreenCustom>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})