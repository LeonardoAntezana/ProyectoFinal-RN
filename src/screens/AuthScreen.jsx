import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/user.actions'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenCustom, Input, ButtonOpacity } from '../components'
import Colors from '../constants/Colors'

const AuthScreen = () => {
 
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const onChangeEmail = value => setEmail(value)

  const onChangePassword = value => setPassword(value)

  const handleSign = () => {
    dispatch(signUp(email, password))
  }

  return (
    <ScreenCustom style={styles.screen}>
        <View style={styles.box}>
          <Text>AuthScreen</Text>
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
        <ButtonOpacity title='REGISTRARSE' style={styles.button} onPress={handleSign}/>
        </View>
    </ScreenCustom>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    padding: 60,
  },
  box: {
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