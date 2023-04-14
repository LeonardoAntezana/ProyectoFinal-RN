import { useCallApi } from '../../hooks/useCallApi'
import BASE_URL from '../../constants/Request'
import { FlatList, StyleSheet, View } from 'react-native'
import { ScreenCustom, Title } from '../../components'
import { CardCharacter } from '../../components'

const HomeScreen = ({navigation}) => {

  const { data: wanted } = useCallApi(`${BASE_URL}/character/1,2,3,4`);

  const { data: characters, isPending } = useCallApi(`${BASE_URL}/character/?page=5`);
  
  const handleSelect = item => {
    const {id, name, image, gender, species, origin, status, episode} = item
    navigation.navigate('Details', {id, name, image, gender, species, originName: origin.name, status, numEpisodes: episode.length})
  }

  const renderCharacter = ({item}) => (
    <CardCharacter character={item} onSelected={handleSelect}/>
  )

  const renderWanted = ({item}) => (
    <CardCharacter style={styles.charac} character={item} onSelected={handleSelect} showContent={false}/>
  )

  if(isPending){
    return(
      <ScreenCustom style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <Title text='CARGANDO...'/>
      </ScreenCustom>
    )
  }

  return (
    <ScreenCustom style={styles.container}>
      <FlatList
      data={characters.results}
      renderItem={renderCharacter}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return(
        <View style={styles.wantedContainer}>
        <Title text='Mas buscados'/>
        <FlatList
        data={wanted}
        renderItem={renderWanted}
        keyExtractor={item => item.id}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
        />
        <Title text='Personajes' style={{marginBottom: 0}}/>
        </View>
        )}}
      numColumns={2}
      />      
    </ScreenCustom>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  charac: {
    margin: 0,
    marginRight: 10,
    width: 250,
    height: 150,
  },
  wantedContainer: {
    marginHorizontal: 7,
    marginBottom: 20,
  }
})