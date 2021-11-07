import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import { CategoryCard } from '..';

export default function Categories() {
  const { categories, loading, error } = useSelector(state => state.categoriesState)

  if (error) {
    <h1>Something error...</h1>
  }

  return (
    <div className="container my-5 font-style">
      <h1 className="fs-1 mb-3">Category List</h1>
      {
        loading ? <h4>Loading...</h4> : (
          <OwlCarousel
            className='owl-theme row'
            margin={23}
            responsiveClass
            navText={["ᐊ", "ᐅ"]}
            loop
            callbacks={false}
            responsive={{
              0: {
                items: 1,
                dots: false,
                nav: true
              },
              576: {
                items: 2
              },
              768: {
                items: 3
              },
              1400: {
                items: 5
              }
            }}
          >
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
