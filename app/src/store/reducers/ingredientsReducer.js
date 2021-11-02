import {
  SET_INGREDIENTS,
  SET_INGREDIENTS_LOADING,
  SET_INGREDIENTS_ERROR
} from "../keys";

const initialState = {
  ingredients: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_INGREDIENTS:
      return { ...state, ingredients: payload }
    case SET_INGREDIENTS_LOADING:
      return { ...state, loading: payload }
    case SET_INGREDIENTS_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}