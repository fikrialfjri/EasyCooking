import {
  SET_CATEGORIES,
  SET_CATEGORIES_LOADING,
  SET_CATEGORIES_ERROR
} from "../keys";

const initialState = {
  categories: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_CATEGORIES:
      return { ...state, categories: payload }
    case SET_CATEGORIES_LOADING:
      return { ...state, loading: payload }
    case SET_CATEGORIES_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}