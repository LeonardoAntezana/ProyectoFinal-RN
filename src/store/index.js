import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import FavoritesReducer from "./reducers/favorites.reducer";
import AuthReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
    favorites: FavoritesReducer,
    user: AuthReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));