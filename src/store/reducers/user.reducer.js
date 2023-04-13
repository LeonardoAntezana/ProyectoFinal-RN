import { SIGN_UP } from "../actions/user.actions"

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
        default:
            return state
    }
}

export default AuthReducer;