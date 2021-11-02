import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PopularRecipeCard({ ingredient }) {
  return (
    <>
      <Link to={`/recipes/popular-recipe=${ingredient.strIngredient}`}>
        <div className="p-5 mb-4 rounded-3 position-relative" style={{ backgroundColor: "#E9EDF1" }}>
          <Image src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} fluid />
          <div
            className="position-absolute w-100 text-center text-white rounded-bottom p-1 pb-0"
            style={{ backgroundColor: "#FB7600", left: 0, bottom: 0, borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
          >
            <h5>
              {ingredient.strIngredient}
            </h5>
          </div>
        </div>
      </Link>
    </>
  )
}
