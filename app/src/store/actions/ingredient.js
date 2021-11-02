import {
  SET_INGREDIENTS,
  SET_INGREDIENTS_LOADING,
  SET_INGREDIENTS_ERROR
} from "../keys";
import API from "../../apis/API"

export function setIngredients(payload) {
  return {
    type: SET_INGREDIENTS,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_INGREDIENTS_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_INGREDIENTS_ERROR,
    payload
  }
}

export function fetchIngredientsAsync() {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const ingredients = await API({
        method: "GET",
        url: "/list.php?i=list"
      })

      dispatch(setIngredients(ingredients.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
