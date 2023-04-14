import { SIGN_UP, SIGN_IN, USER_SET_IMAGE } from "../actions/user.actions"

const initialState = {
    name: '',
    userID: '',
    tokenID: '',
    imageUri: ''
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                name: action.name,
                userID: action.userId,
                tokenID: action.token
            }
        case SIGN_IN:
            return {
                ...state,
                name: action.name,
                userID: action.userId,
                tokenID: action.token
            }
        case USER_SET_IMAGE:
            return {
                ...state,
                imageUri: action.uri
            }
        default:
            return state
    }
}

export default AuthReducer;