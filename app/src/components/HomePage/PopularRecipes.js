import React from 'react'
import { useSelector } from "react-redux"
import { Container } from 'react-bootstrap'
import { PopularRecipeCard } from '../'

export default function PopularRecipes() {
  const { ingredients, loading, error } = useSelector(state => state.ingredientsState)

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="font-style">
      <Container>
        <h1 className="fs-1 mb-3">Most Popular Recipes</h1>
        {
          loading ? <h1>Loading...</h1> : (
            <div className="row">
              {
                ingredients.map((ingredient) => {
                  return (
                    <div className="col-4">
                      <PopularRecipeCard
                        key={ingredient.idIngredient}
                        ingredient={ingredient}
                      />
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </Container>
    </div>
  )
}
