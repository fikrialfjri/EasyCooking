import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategoriesAsync } from '../store/actions/categories'
import { fetchIngredientsAsync } from '../store/actions/ingredient'
import {
  Header,
  Categories,
  PopularRecipes,
  Footer
} from '../components'

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
    dispatch(fetchIngredientsAsync())
  }, [dispatch])

  return (
    <>
      <Header />
      <Categories />
      <PopularRecipes />
      <Footer />
    </>
  )
}
