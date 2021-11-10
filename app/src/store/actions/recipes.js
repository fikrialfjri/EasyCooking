import {
  SET_RECIPES_BY_CATEGORY,
  SET_RECIPES_BY_AREA,
  SET_RECIPES_BY_POPULAR_RECIPE,
  SET_RECIPES_BY_SEARCH,
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
    type: SET_RECIPES_BY_AREA,
    payload
  }
}

export function setRecipesByPopularRecipe(payload) {
  return {
    type: SET_RECIPES_BY_POPULAR_RECIPE,
    payload
  }
}

export function setRecipesBySearch(payload) {
  return {
    type: SET_RECIPES_BY_SEARCH,
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

export function fetchRecipesByPopularRecipeAsync(recipeIngredient) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipesByPopularRecipe = await API({
        method: "GET",
        url: `/filter.php?i=${recipeIngredient}`
      })


      dispatch(setRecipesByPopularRecipe(recipesByPopularRecipe.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function fetchRecipesBySearchAsync(recipeIngredient) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipesBySearch = await API({
        method: "GET",
        url: `/search.php?s=${recipeIngredient}`
      })


      dispatch(setRecipesBySearch(recipesBySearch.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function fetchRecipesByFirstLetterAsync(recipeIngredient) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipesByFirstLetter = await API({
        method: "GET",
        url: `/search.php?f=${recipeIngredient}`
      })


      dispatch(setRecipesBySearch(recipesByFirstLetter.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function fetchRecipeAsync(idMeal) {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const recipeDetail = await API({
        method: "GET",
        url: `/lookup.php?i=${idMeal}`
      })

      dispatch(setRecipe(recipeDetail.data.meals))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
