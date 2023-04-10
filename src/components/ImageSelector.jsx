import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const ImageSelector = () => {

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

  return (
    <>
      <View style={styles.box}>
        {image ? <Image style={styles.image} source={{uri: image}}/> : <Text>Esperando foto...</Text>}
      </View>
      <Button title='Tomar foto' onPress={handleTakeImage}/>
    </>
  )
}

export default ImageSelector;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    height: 200,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },  
})