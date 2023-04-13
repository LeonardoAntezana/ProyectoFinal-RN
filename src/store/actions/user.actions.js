import { Alert } from "react-native";
import { AUTH_URL } from "../../../database"; 

export const SIGN_UP = 'SIGN_UP';

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