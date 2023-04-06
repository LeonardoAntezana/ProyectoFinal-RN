import { useCallApi } from '../../hooks/useCallApi'
import BASE_URL from '../../constants/Request'
import { FlatList, StyleSheet } from 'react-native'
import { ScreenCustom } from '../../components'
import { CardCharacter } from '../../components'

const HomeScreen = ({navigation}) => {
  
  const { data: characters, isPending } = useCallApi(`${BASE_URL}/character`);
  
  const handleSelect = id => {
    navigation.navigate('Details', {id})
  }

  const renderCharacter = ({item}) => (
    <CardCharacter character={item} onSelected={handleSelect}/>
  )

  return (
    <ScreenCustom style={styles.container}>
      
      <FlatList
      data={characters.results}
      renderItem={renderCharacter}
      keyExtractor={item => item.id}
      numColumns={2}
      />
    </ScreenCustom>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
})