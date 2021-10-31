import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipesByCategoryAsync } from '../store/actions/recipes'
import { RecipeByCategoryCard } from '../components'
import { CardGroup } from 'react-bootstrap'

export default function RecipesByCategoryPage() {
  const { categoryName } = useParams()
  const dispatch = useDispatch()
  const { recipesByCategory, loading, error } = useSelector(state => state.recipesState)

  useEffect(() => {
    dispatch(fetchRecipesByCategoryAsync(categoryName))
  }, [])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Recipe List By Category {`> ${categoryName}`}</h1>
      </div>
      {
        loading ? <h1>Loading...</h1> : (
          <CardGroup>
            <div className="row">
              {
                recipesByCategory.map((recipe) => {
                  return (
                    <RecipeByCategoryCard
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
    </div>
  )
}
