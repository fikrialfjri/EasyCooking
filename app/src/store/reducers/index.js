import { combineReducers } from "redux"
import categoriesReducer from "./categoriesReducer"
import recipesReducer from "./recipesReducer"
import areasReducer from "./areasReducer"
import ingredientsReducer from "./ingredientsReducer"

export const reducer = combineReducers({
  categoriesState: categoriesReducer,
  recipesState: recipesReducer,
  areasState: areasReducer,
  ingredientsState: ingredientsReducer
})