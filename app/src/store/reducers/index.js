import { combineReducers } from "redux"
import categoriesReducer from "./categoriesReducer"
import recipesReducer from "./recipesReducer"

export const reducer = combineReducers({
  categoriesState: categoriesReducer,
  recipesState: recipesReducer
})