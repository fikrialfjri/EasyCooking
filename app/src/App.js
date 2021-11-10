import React from 'react'
import { NavigationBar } from './components'
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  FavouritePage,
  RecipesByCategoryPage,
  RecipesByAreaPage,
  RecipeDetailPage,
  RecipesByPopularRecipePage,
  RecipesBySearchPage
} from './pages';

export default function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
        <Route path="/recipes/category=:categoryName">
          <RecipesByCategoryPage />
        </Route>
        <Route path="/recipes/area=:areaName">
          <RecipesByAreaPage />
        </Route>
        <Route path="/recipes/popular-recipe=:recipeIngredient">
          <RecipesByPopularRecipePage />
        </Route>
        <Route path="/recipes/search=:inputMeal">
          <RecipesBySearchPage />
        </Route>
        <Route path="/recipe/:idMeal">
          <RecipeDetailPage />
        </Route>
      </Switch>
    </>
  )
}
