import React from 'react'
import { useSelector } from 'react-redux'
import {
  Image
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';

export default function RecipeDetailCard() {
  const { recipe, loading, error } = useSelector(state => state.recipesState)

  if (error) {
    return <h1>Something error...</h1>
  }

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const youtubeId = (strYoutube) => {
    const videoId = strYoutube.slice(32)
    return videoId
  }

  return (
    <>
      {
        loading ? <h1>Loading...</h1> : (
          recipe.map((el) => {
            return (
              <>
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-12">
                    <Image src={el.strMealThumb} alt={`${el.strMeal} Image`} fluid />
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-6 col-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                    <h1 className="fs-2">{el.strMeal}</h1>
                    <div className="row align-items-center fs-5 mt-3">
                      <div className="fw-bold col-lg-5 col-md-6" style={{ color: "#333" }}>
                        Category: <Link
                          to={`/recipes/filter-by-category=${el.strCategory}`}
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          <span className="fw-normal">{el.strCategory}</span>
                        </Link>
                      </div>
                      <div className="fw-bold col-lg-5 col-md-6" style={{ color: "#333" }}>
                        Area: <Link
                          to={`/recipes/filter-by-area=${el.strArea}`}
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          <span className="fw-normal">{el.strArea}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="fs-5">Ingredients</h3>
                      <div className="d-flex">
                        <ul className="me-4">
                          {
                            el.strMeasure1.length !== 0 && el.strIngredient1.length !== 0 ? (
                              <li>{el.strMeasure1} {el.strIngredient1}</li>
                            ) : null
                          }{
                            el.strMeasure2.length !== 0 && el.strIngredient2.length !== 0 ? (
                              <li>{el.strMeasure2} {el.strIngredient2}</li>
                            ) : null
                          }{
                            el.strMeasure3.length !== 0 && el.strIngredient3.length !== 0 ? (
                              <li>{el.strMeasure3} {el.strIngredient3}</li>
                            ) : null
                          }{
                            el.strMeasure4.length !== 0 && el.strIngredient4.length !== 0 ? (
                              <li>{el.strMeasure4} {el.strIngredient4}</li>
                            ) : null
                          }{
                            el.strMeasure5.length !== 0 && el.strIngredient5.length !== 0 ? (
                              <li>{el.strMeasure5} {el.strIngredient5}</li>
                            ) : null
                          }{
                            el.strMeasure6.length !== 0 && el.strIngredient6.length !== 0 ? (
                              <li>{el.strMeasure6} {el.strIngredient6}</li>
                            ) : null
                          }{
                            el.strMeasure7.length !== 0 && el.strIngredient7.length !== 0 ? (
                              <li>{el.strMeasure7} {el.strIngredient7}</li>
                            ) : null
                          }{
                            el.strMeasure8.length !== 0 && el.strIngredient8.length !== 0 ? (
                              <li>{el.strMeasure8} {el.strIngredient8}</li>
                            ) : null
                          }{
                            el.strMeasure9.length !== 0 && el.strIngredient9.length !== 0 ? (
                              <li>{el.strMeasure9} {el.strIngredient9}</li>
                            ) : null
                          }{
                            el.strMeasure10.length !== 0 && el.strIngredient10.length !== 0 ? (
                              <li>{el.strMeasure10} {el.strIngredient10}</li>
                            ) : null
                          }
                        </ul>
                        <ul>
                          {
                            el.strMeasure11.length !== 0 && el.strIngredient11.length !== 0 ? (
                              <li>{el.strMeasure11} {el.strIngredient11}</li>
                            ) : null
                          }{
                            el.strMeasure12.length !== 0 && el.strIngredient12.length !== 0 ? (
                              <li>{el.strMeasure12} {el.strIngredient12}</li>
                            ) : null
                          }{
                            el.strMeasure13.length !== 0 && el.strIngredient13.length !== 0 ? (
                              <li>{el.strMeasure13} {el.strIngredient10}</li>
                            ) : null
                          }{
                            el.strMeasure14.length !== 0 && el.strIngredient14.length !== 0 ? (
                              <li>{el.strMeasure14} {el.strIngredient14}</li>
                            ) : null
                          }{
                            el.strMeasure15.length !== 0 && el.strIngredient15.length !== 0 ? (
                              <li>{el.strMeasure15} {el.strIngredient15}</li>
                            ) : null
                          }{
                            el.strMeasure16.length !== 0 && el.strIngredient16.length !== 0 ? (
                              <li>{el.strMeasure16} {el.strIngredient16}</li>
                            ) : null
                          }{
                            el.strMeasure17.length !== 0 && el.strIngredient17.length !== 0 ? (
                              <li>{el.strMeasure17} {el.strIngredient17}</li>
                            ) : null
                          }{
                            el.strMeasure18.length !== 0 && el.strIngredient18.length !== 0 ? (
                              <li>{el.strMeasure18} {el.strIngredient18}</li>
                            ) : null
                          }{
                            el.strMeasure19.length !== 0 && el.strIngredient19.length !== 0 ? (
                              <li>{el.strMeasure19} {el.strIngredient19}</li>
                            ) : null
                          }{
                            el.strMeasure20.length !== 0 && el.strIngredient20.length !== 0 ? (
                              <li>{el.strMeasure20} {el.strIngredient20}</li>
                            ) : null
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <h3>Instructions</h3>
                  <div>{el.strInstructions}</div>
                </div>
                {
                  el.strYoutube ? (
                    <div>
                      <h3 className="mb-3">Video Tutorial</h3>
                      <YouTube videoId={youtubeId(el.strYoutube)} opts={opts} />
                    </div>
                  ) : null
                }
              </>
            )
          })
        )
      }
    </>
  )
}
