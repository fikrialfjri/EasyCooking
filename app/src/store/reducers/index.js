import { combineReducers } from "redux"
import categoriesReducer from "./categoriesReducer"

export const reducer = combineReducers({
  recipesState: categoriesReducer
})