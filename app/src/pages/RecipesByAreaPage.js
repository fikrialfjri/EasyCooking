import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipesByAreaAsync } from '../store/actions/recipes'
import { RecipeCard } from '../components'
import { CardGroup } from 'react-bootstrap'
import { NotFoundPage } from '.'

export default function RecipesByCategoryPage() {
  const { areaName } = useParams()
  const dispatch = useDispatch()
  const { recipesByArea, loading, error } = useSelector(state => state.recipesState)

  useEffect(() => {
    dispatch(fetchRecipesByAreaAsync(areaName))
  }, [dispatch, areaName])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="container">
      {
        recipesByArea ? (
          <>
            <div className="text-center my-3">
              <h1>Meal by Area {`> ${areaName.toUpperCase()}`}</h1>
            </div>
            {
              loading ? <h1>Loading...</h1> : (
                <CardGroup>
                  <div className="row">
                    {
                      recipesByArea.map((recipe) => {
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
