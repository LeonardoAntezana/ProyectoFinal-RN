import { useCallApi } from '../../hooks/useCallApi'
import BASE_URL from '../../constants/Request'
import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
import { ScreenCustom, Title } from '../../components'
import { CardCharacter } from '../../components'

const { width, height } = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {

  const { data: wanted } = useCallApi(`${BASE_URL}/character/1,2,3,4`);

  const { data: characters, isPending } = useCallApi(`${BASE_URL}/character/?page=5`);
  
  const handleSelect = item => {
    const {id, name, image, gender, species, origin, status, episode} = item
    navigation.navigate('Details', {id, name, image, gender, species, originName: origin.name, status, numEpisodes: episode.length})
  }

  const renderCharacter = ({item}) => (
    <CardCharacter character={item} onSelected={handleSelect} style={styles.card}/>
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
        <Title text='Mas buscados' style={styles.title}/>
        <FlatList
        data={wanted}
        renderItem={renderWanted}
        keyExtractor={item => item.id}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
        />
        <Title text='Personajes' style={[styles.title ,{marginBottom: 0}]}/>
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
    paddingBottom: height > 600 ? 80 : 70,
  },
  card: {
    height: height > 700 ? 250 : 180,
  },
  charac: {
    margin: 0,
    marginRight: 10,
    width: width > 400 ? 250 : 190,
    height: height > 700 ? 150 : 110,
  },
  wantedContainer: {
    marginHorizontal: 7,
    marginBottom: 20,
  },
  title: {
    marginTop: width > 400 ? 40 : 25,
  }
})