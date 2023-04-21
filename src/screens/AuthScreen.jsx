import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn, signUp } from '../store/actions/user.actions'
import { StyleSheet, View, Alert } from 'react-native'
import { ScreenCustom, Input, ButtonOpacity } from '../components'
import Colors from '../constants/Colors'

const AuthScreen = () => {
  
  const [modeSelected, setModeSelected] = useState('signUp')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch();

  const onChangeEmail = value => setEmail(value)

  const onChangePassword = value => setPassword(value)

  const handleSign = () => {
    if(email && password){
      dispatch(signUp(email, password))
    }
    else{
      Alert.alert('Ingrese datos')
    }
  }

  const handleLogin = () => {
    if(email && password){
      dispatch(signIn(email, password))
    }
    else{
      Alert.alert('Ingrese datos')
    }
  } 

  return (
    <ScreenCustom style={styles.screen}>
        <View style={styles.box}>
          <View style={styles.mode}>
            <ButtonOpacity 
            title='SIGNUP'
            color={modeSelected === 'signUp' ? Colors.primary : '#d6d3d3'}
            style={[styles.modeButtons, styles.buttonSign]}
            onPress={() => setModeSelected('signUp')}
            />
            <ButtonOpacity
            title='LOGIN'
            color={modeSelected === 'logIn' ? Colors.primary : '#d6d3d3'}
            style={[styles.modeButtons, styles.buttonLog]}
            onPress={() => setModeSelected('logIn')}
            />
          </View>
          <Input
            onChange={onChangeEmail}
            label='Correo electronico'
            type='email-address'
            placeholder='jhon77@gmail.com'
            maxLength={25}
          />
          <Input
            onChange={onChangePassword}
            label='Contraseña'
            maxLength={20}
            secureTextEntry
          />
        <ButtonOpacity
        title={modeSelected === 'signUp' ? 'REGISTRARSE' : 'INICIAR SESION'}
        style={styles.button}
        onPress={modeSelected === 'signUp' ? handleSign : handleLogin}/>
        </View>
    </ScreenCustom>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mode: {
    flexDirection: 'row',
  },
  modeButtons:{
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonSign: {
    borderTopRightRadius: 0,
    borderBottomEndRadius: 0,
  },
  buttonLog: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  box: {
    width: '80%',
    maxWidth: '90%',
    alignItems: 'center',
    borderRadius: 6,
    padding: 25,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 25,
    paddingHorizontal: 20,
  }
})