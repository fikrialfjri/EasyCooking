import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
      <Link
        to={`/recipe/${recipe.idMeal}`}
        style={{ color: "#333", textDecoration: "none" }}
      >
        <Image className="rounded-2" src={recipe.strMealThumb} fluid />
        <h1 className="fs-5 text-center mt-1">{recipe.strMeal}</h1>
      </Link>
    </div>
  )
}
