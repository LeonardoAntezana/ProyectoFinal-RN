import { SIGN_UP, SIGN_IN } from "../actions/user.actions"

const initialState = {
    name: '',
    userID: '',
    tokenID: ''
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP:
            return {
                name: action.name,
                userID: action.userId,
                tokenID: action.token
            }
        case SIGN_IN:
            return {
                name: action.name,
                userID: action.userId,
                tokenID: action.token
            }
        default:
            return state
    }
}

export default AuthReducer;