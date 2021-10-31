import React from 'react'
import { NavigationBar } from './components'
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  KategoriPage,
  FavoritPage,
  RecipesByCategoryPage
} from './pages';

export default function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/category">
          <KategoriPage />
        </Route>
        <Route path="/favourite">
          <FavoritPage />
        </Route>
        <Route path="/recipes/filter-by-category=:categoryName">
          <RecipesByCategoryPage />
        </Route>
      </Switch>
    </>
  )
}
