import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipesByPopularRecipeAsync } from '../store/actions/recipes'
import { Footer, RecipeCard } from '../components'
import { CardGroup } from 'react-bootstrap'
import { NotFoundPage } from '.'

export default function RecipesByPopularRecipePage() {
  const { recipeIngredient } = useParams()
  const dispatch = useDispatch()
  const { recipesByPopularRecipe, loading, error } = useSelector(state => state.recipesState)

  useEffect(() => {
    dispatch(fetchRecipesByPopularRecipeAsync(recipeIngredient))
  }, [dispatch, recipeIngredient])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <>
      <div className="container">
        {
          recipesByPopularRecipe ? (
            <>
              <div className="text-center my-3">
                <h1>Meals by Popular Recipe {`> ${recipeIngredient.toUpperCase()}`}</h1>
              </div>
              {
                loading ? <h1>Loading...</h1> : (
                  <CardGroup>
                    <div className="row">
                      {
                        recipesByPopularRecipe.map((recipe) => {
                          return (
                            <RecipeCard
                              key={recipe.idMeal}
                              recipe={recipe}
                            />
                          )
                        })
                      }
                    </div>
                  </CardGroup>
                )
              }
            </>
          ) : (
            <NotFoundPage />
          )
        }
      </div>
      <Footer />
    </>
  )
}
