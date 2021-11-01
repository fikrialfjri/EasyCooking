import React from 'react'
import { NavigationBar } from './components'
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  FavouritePage,
  RecipesByCategoryPage,
  RecipesByAreaPage,
  RecipeDetailPage
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
        <Route path="/recipes/filter-by-category=:categoryName">
          <RecipesByCategoryPage />
        </Route>
        <Route path="/recipes/filter-by-area=:areaName">
          <RecipesByAreaPage />
        </Route>
        <Route path="/recipe/:idMeal">
          <RecipeDetailPage />
        </Route>
      </Switch>
    </>
  )
}
