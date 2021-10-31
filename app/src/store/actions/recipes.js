import {
  SET_RECIPES_BY_CATEGORY,
  SET_LOADING,
  SET_ERROR
} from "../keys";
import API from "../../apis/API"

export function setRecipesByCategory(payload) {
  return {
    type: SET_RECIPES_BY_CATEGORY,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload
  }
}

export function fetchRecipesByCategoryAsync(categoryName) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipesByCategory = await API({
        method: "GET",
        url: `/filter.php?c=${categoryName}`
      })

      dispatch(setRecipesByCategory(recipesByCategory.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
