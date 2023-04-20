import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import ButtonOpacity from './ButtonOpacity'
import Colors from '../constants/Colors'

const ImageSelector = ({ onSelect }) => {

  const [image, setImage] = useState('')

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if(status !== 'granted'){
      alert("Permisos denegados, para continuar aceptelos");
      return false;
    }
    return true;
  }

  const handleTakeImage = async () => {
    const permissions = await verifyPermissions();
    if(!permissions) return;
      
    const image = await ImagePicker.launchCameraAsync();
    
    if(image){
      setImage(image.assets[0].uri);
    }
  }

  const handleSave = () => {
    onSelect(image)
    setImage('')
  }

  return (
    <>
      <View style={styles.box}>
        {image ? <Image style={styles.image} source={{uri: image}}/> : <Text>Esperando foto...</Text>}
      </View>
      <ButtonOpacity 
      title='Tomar foto' 
      color={Colors.primary}
      style={styles.buttonPhoto} 
      onPress={handleTakeImage}/>
      {image && <ButtonOpacity color={Colors.secondaryBlack} title='Definir como icono' onPress={handleSave}/>}
    </>
  )
}

export default ImageSelector;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonPhoto: {
    marginTop: 40,
    marginBottom: 10,
  }  
})