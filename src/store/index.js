import { createStore, combineReducers } from "redux";

import FavoritesReducer from "./reducers/favorites.reducer";

const RootReducer = combineReducers({
    favorites: FavoritesReducer,
})

export default createStore(RootReducer);