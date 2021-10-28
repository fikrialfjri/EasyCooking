import {
  SET_RECIPES,
  SET_RECIPES_LOADING,
  SET_RECIPES_ERROR
} from "../keys";
import API from "../../apis/API"

export function setRecipes(payload) {
  return {
    type: SET_RECIPES,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_RECIPES_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_RECIPES_ERROR,
    payload
  }
}

export function fetchRecipesAsync() {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipes = await API({
        method: "GET",
        url: "/api/recipes"
      })

      dispatch(setRecipes(recipes.data.results))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
