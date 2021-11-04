import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Container, Button } from 'react-bootstrap'
import { PopularRecipeCard } from '../'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function PopularRecipes() {
  const { ingredients, loading, error } = useSelector(state => state.ingredientsState)

  console.log(ingredients.length);

  const newIngredients = ingredients.slice(0, 20)
  const [state, setState] = useState({
    items: newIngredients
  })

  console.log(state.items.length, ">>>>>>");

  const fetchMoreData = (value) => {
    if (state.items.length === 0) {
      setState({
        items: state.items.concat(ingredients.slice(state.items.length, state.items.length + 20))
      });
    } else if (value === "next") {
      setTimeout(() => {
        state.items.length <= 560 ? setState({
          items: state.items.concat(ingredients.slice(state.items.length, state.items.length + 20))
        }) : setState({
          items: state.items.concat(ingredients.slice(state.items.length, ingredients.length))
        })
      }, 500);
    }
  };

  useEffect(() => {
    setState(state)
  }, [state])

  if (error) {
    return <h1>Something error...</h1>
  }

  return (
    <div className="font-style mb-3">
      <Container>
        <h1 className="fs-1 mb-3">Most Popular Recipes</h1>
        {
          loading ? <h1>Loading...</h1> : (
            <InfiniteScroll
              dataLength={state.items.length}
              next={() => fetchMoreData()}
              hasMore={true}
              loader={
                <Button className="button rounded-0 w-100 fw-bold m-0" onClick={() => fetchMoreData("next")}>
                  Load More
                </Button>
              }
              className="m-0 p-0"
              scrollableTarget="scrollableDiv"
            >
              <div className="row">
                {
                  state.items.map((ingredient) => {
                    return (
                      <div className="col-lg-4 col-md-4 col-sm-6 mb-1">
                        <PopularRecipeCard
                          key={ingredient.idIngredient}
                          ingredient={ingredient}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </InfiniteScroll>
          )
        }
      </Container>
    </div>
  )
}
