import { Alert } from "react-native";
import { AUTH_URL, SIGN_IN_URL } from "../../../database"; 

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (email, password) => {
    return async dispatch => {
        const res = await fetch(AUTH_URL, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        if(!res.ok){
            const dataError = await res.json();
            const errorID = dataError.error.message;

            let msj = 'Error al registrarse'

            if(errorID === 'EMAIL_EXISTS'){
                msj= 'El email ya existe';
                Alert.alert(msj)
            }
            else{
                Alert.alert(msj)
            }
            
            return
        }

        const data = await res.json();

        dispatch({
            type: SIGN_UP,
            name: data.email,
            userId: data.localId,
            token: data.idToken,
        })
    } 
}

export const signIn = (email, password) => {
    return async dispatch => {
        const res = await fetch(SIGN_IN_URL, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        if(!res.ok){
            const dataError = await res.json();
            const errorID = dataError.error.message;

            let msj = 'Error al registrarse'

            if(errorID === 'EMAIL_NOT_FOUND'){
                msj= 'El email no se encuentra registrado';
                Alert.alert(msj)
            }
            if(errorID === 'INVALID_PASSWORD'){
                msj='La contraseña es invalida'
                Alert.alert(msj)
            }
            else{
                Alert.alert(msj)
            }
            
            return
        }

        const data = await res.json();

        dispatch({
            type: SIGN_IN,
            name: data.email,
            userId: data.localId,
            token: data.idToken,
        })
    }
}