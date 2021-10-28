import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import { RecipeCard } from '../';

export default function Recipes() {
  const { recipes, loading, error } = useSelector(state => state.recipesState)

  if (error) {
    <h1>Something error...</h1>
  }

  return (
    <div className="container my-5 font-style">
      <h1 className="fs-1 mb-3">Rekomendasi Menu Untuk Kamu</h1>
      {
        loading ? <h4>Loading...</h4> : (
          <OwlCarousel className='owl-theme row' nav navText={["ᐊ", "ᐅ"]} dots={false} callbacks={false}>
            {
              recipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.key}
                    recipe={recipe}
                  />
                )
              })
            }
          </OwlCarousel>
        )
      }
    </div>
  )
}
