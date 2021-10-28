import {
  SET_RECIPES,
  SET_RECIPES_LOADING,
  SET_RECIPES_ERROR
} from "../keys";

const initialState = {
  recipes: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_RECIPES:
      return { ...state, recipes: payload }
    case SET_RECIPES_LOADING:
      return { ...state, loading: payload }
    case SET_RECIPES_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}