import {
  SET_AREAS,
  SET_AREAS_LOADING,
  SET_AREAS_ERROR
} from "../keys";

const initialState = {
  areas: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_AREAS:
      return { ...state, areas: payload }
    case SET_AREAS_LOADING:
      return { ...state, loading: payload }
    case SET_AREAS_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}