import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecipesAsync } from '../store/actions/recipes'
import {
  Header,
  Recipes
} from '../components'

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipesAsync())
  }, [])

  return (
    <>
      <Header />
      <Recipes />
    </>
  )
}
