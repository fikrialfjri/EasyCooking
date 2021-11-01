import {
  SET_RECIPES_BY_CATEGORY,
  SET_RECIPES_BY_AREAS,
  SET_RECIPE,
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

export function setRecipesByArea(payload) {
  return {
    type: SET_RECIPES_BY_AREAS,
    payload
  }
}

export function setRecipe(payload) {
  return {
    type: SET_RECIPE,
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

export function fetchRecipesByAreaAsync(areaName) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipesByArea = await API({
        method: "GET",
        url: `/filter.php?a=${areaName}`
      })

      dispatch(setRecipesByArea(recipesByArea.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}


