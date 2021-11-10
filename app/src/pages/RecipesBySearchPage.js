import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { RecipeCard } from '../components'
import { CardGroup } from 'react-bootstrap'
import { fetchRecipesBySearchAsync } from '../store/actions/recipes'
import { NotFoundPage } from '.'

export default function RecipesByCategoryPage() {
  const { inputMeal } = useParams()
  const dispatch = useDispatch()
  const { recipesBySearch, loading, error } = useSelector(state => state.recipesState)

  useEffect(() => {
    dispatch(fetchRecipesBySearchAsync(inputMeal))
  }, [dispatch, inputMeal])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="container">
      {
        recipesBySearch ? (
          <>
            <div className="text-center my-3">
              <h1>Meal by Search {`> ${inputMeal}`}</h1>
            </div>
            {
              loading ? <h1>Loading...</h1> : (
                <CardGroup>
                  <div className="row">
                    {
                      recipesBySearch.map((recipe) => {
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
  )
}
