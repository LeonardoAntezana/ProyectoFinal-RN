import { useCallApi } from '../../hooks/useCallApi'
import BASE_URL from '../../constants/Request'
import { FlatList, StyleSheet } from 'react-native'
import { ScreenCustom } from '../../components'
import { CardCharacter } from '../../components'

const HomeScreen = ({navigation}) => {
  
  const { data: characters, isPending } = useCallApi(`${BASE_URL}/character`);
  
  const handleSelect = item => {
    const {id, name, image, gender, species, origin, status, episode} = item
    navigation.navigate('Details', {id, name, image, gender, species, originName: origin.name, status, numEpisodes: episode.length})
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