import { useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import Colors from '../constants/Colors'

const UserIcon = ({ navigation }) => {
  const uri = useSelector(state => state.user.imageUri)
  const user = useSelector(state => state.user.name)

  return (
    <TouchableOpacity style={styles.icon} onPress={() => console.log('click')}>
      {uri 
      ? <Image style={styles.image} source={{uri: uri}} /> 
      : <Text style={styles.text}>{user[0]}</Text>}
    </TouchableOpacity>
  )
}

export default UserIcon;

const styles = StyleSheet.create({
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary,
      width: 40,
      height: 40,
      borderRadius: 35,
    },
    image: {
      borderRadius: 35,
      width: '100%',
      height: '100%',
    },
    text: {
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 20,
    }
})