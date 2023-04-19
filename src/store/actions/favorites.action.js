import { fetchFavorites, insertFavorite, removeFavorite } from "../../db";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export const addFavorite = (character) => {
    return async dispatch => {
        try{
            const {id, name, image, gender, species, originName, status, numEpisodes} = character
            const res = await insertFavorite(id, name, image, gender, species, originName, status, numEpisodes);
            dispatch({type: ADD_FAVORITE, payload: character})
        }
        catch(error){
            throw error;
        }
    }
}

export const deleteFavorite = (id) => {
    return async dispatch => {
        try{
            removeFavorite(id);
            dispatch({type: DELETE_FAVORITE, payload: id})
        }
        catch(error){
            throw error;
        }
    }
}

export const loadFavorites = () => {
    return async dispatch => {
        try {
            const res = await fetchFavorites();
            dispatch({type: LOAD_FAVORITES, payload: res.rows._array});
        }
        catch(error){
            throw error;
        }
    }
}