import {
  SET_AREAS,
  SET_AREAS_LOADING,
  SET_AREAS_ERROR
} from "../keys";
import API from "../../apis/API"

export function setAreas(payload) {
  return {
    type: SET_AREAS,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_AREAS_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_AREAS_ERROR,
    payload
  }
}

export function fetchAreasAsync() {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const areas = await API({
        method: "GET",
        url: "/list.php?a=list"
      })

      dispatch(setAreas(areas.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
