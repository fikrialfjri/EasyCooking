import {
  SET_RECIPES_BY_CATEGORY,
  SET_RECIPES_BY_AREA,
  SET_RECIPES_BY_POPULAR_RECIPE,
  SET_RECIPES_BY_SEARCH,
  SET_RECIPE,
  SET_LOADING,
  SET_ERROR
} from "../keys";

const initialState = {
  recipesByCategory: [],
  recipesByArea: [],
  recipesByPopularRecipe: [],
  recipesBySearch: [],
  recipe: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_RECIPES_BY_CATEGORY:
      return { ...state, recipesByCategory: payload }
    case SET_RECIPES_BY_AREA:
      return { ...state, recipesByArea: payload }
    case SET_RECIPES_BY_POPULAR_RECIPE:
      return { ...state, recipesByPopularRecipe: payload }
    case SET_RECIPES_BY_SEARCH:
      return { ...state, recipesBySearch: payload }
    case SET_RECIPE:
      return { ...state, recipe: payload }
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}