import {
  SET_RECIPES_BY_CATEGORY,
  SET_LOADING,
  SET_ERROR
} from "../keys";

const initialState = {
  recipesByCategory: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_RECIPES_BY_CATEGORY:
      return { ...state, recipesByCategory: payload }
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}