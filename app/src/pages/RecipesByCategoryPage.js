import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipesByCategoryAsync } from '../store/actions/recipes'
import { RecipeCard } from '../components'
import { CardGroup } from 'react-bootstrap'
import { NotFoundPage } from '.'

export default function RecipesByCategoryPage() {
  const { categoryName } = useParams()
  const dispatch = useDispatch()
  const { recipesByCategory, loading, error } = useSelector(state => state.recipesState)

  useEffect(() => {
    dispatch(fetchRecipesByCategoryAsync(categoryName))
  }, [dispatch, categoryName])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="container">
      {
        recipesByCategory ? (
          <>
            <div className="text-center my-3">
              <h1>Meals by Category {`> ${categoryName.toUpperCase()}`}</h1>
            </div>
            {
              loading ? <h1>Loading...</h1> : (
                <CardGroup>
                  <div className="row">
                    {
                      recipesByCategory.map((recipe) => {
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
