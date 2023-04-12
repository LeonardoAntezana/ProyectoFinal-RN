import { ADD_FAVORITE } from "../actions/favorites.action";
import { DELETE_FAVORITE } from "../actions/favorites.action";

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
        default:
            return state;
    }
}

export default FavoritesReducer;