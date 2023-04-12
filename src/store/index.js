import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import FavoritesReducer from "./reducers/favorites.reducer";

const RootReducer = combineReducers({
    favorites: FavoritesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));