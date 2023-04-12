import { ADD_FAVORITE, DELETE_FAVORITE, LOAD_FAVORITES } from "../actions/favorites.action";

const initialState = {
    favorites: []
}

const FavoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(elem => elem.id !== action.payload)
            }
        case LOAD_FAVORITES:
            return {
                ...state,
                favorites: action.payload.reverse()
            }
        default:
            return state;
    }
}

export default FavoritesReducer;