import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategoriesAsync } from '../store/actions/categories'
import {
  Header,
  Categories
} from '../components'

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [dispatch])

  return (
    <>
      <Header />
      <Categories />
    </>
  )
}
