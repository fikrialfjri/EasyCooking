import {
  SET_CATEGORIES,
  SET_CATEGORIES_LOADING,
  SET_CATEGORIES_ERROR
} from "../keys";
import API from "../../apis/API"

export function setCategories(payload) {
  return {
    type: SET_CATEGORIES,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_CATEGORIES_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_CATEGORIES_ERROR,
    payload
  }
}

export function fetchCategoriesAsync() {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const categories = await API({
        method: "GET",
        url: "/list.php?c=list"
      })

      dispatch(setCategories(categories.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
      console.log(error);
    }
  }
}
