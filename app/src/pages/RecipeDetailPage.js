import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchRecipeAsync } from '../store/actions/recipes'
import {
  Container
} from 'react-bootstrap'
import { Footer, RecipeDetailCard } from '../components'

export default function RecipeDetailPage() {
  const { idMeal } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipeAsync(idMeal))
  }, [dispatch, idMeal])

  return (
    <>
      <div className="mt-3">
        <Container>
          <RecipeDetailCard />
        </Container>
      </div>
      <Footer />
    </>
  )
}
