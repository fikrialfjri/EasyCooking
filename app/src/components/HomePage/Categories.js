import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import { CategoryCard } from '..';

export default function Categories() {
  const { categories, loading, error } = useSelector(state => state.recipesState)

  if (error) {
    <h1>Something error...</h1>
  }

  return (
    <div className="container my-5 font-style">
      <h1 className="fs-1 mb-3">Category List</h1>
      {
        loading ? <h4>Loading...</h4> : (
          <OwlCarousel className='owl-theme row' margin={5} nav navText={["ᐊ", "ᐅ"]} dots={false} callbacks={false}>
            {
              categories.map((category, i) => {
                return (
                  <CategoryCard
                    key={i}
                    category={category}
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
