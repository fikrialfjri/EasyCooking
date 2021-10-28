import React from 'react'
import { FaClock, FaSearchengin } from 'react-icons/fa'
import { IoRestaurant } from "react-icons/io5"
import { Card } from 'react-bootstrap';

export default function RecipeCard({ recipe }) {
  console.log(recipe);

  return (
    <>
      <div class="item col-11 shadow">
        <Card className="border-0">
          <Card.Img variant="top" src={recipe?.thumb} fluid />
          <Card.ImgOverlay>
            <div className="position-relative ps-3 w-50 rounded-end" style={{ backgroundColor: "#FB7600", left: -16 }}>
              <Card.Text>{recipe.dificulty}</Card.Text>
            </div>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex">
              <div className="d-flex align-items-center">
                <FaClock color="#FB7600" className="me-1" />
                <Card.Text style={{ fontSize: "11px" }}>{recipe.times}</Card.Text>
              </div>
              <div className="d-flex align-items-center ms-3">
                <IoRestaurant color="#FB7600" className="me-1" />
                <Card.Text style={{ fontSize: "11px" }}>{recipe.portion}</Card.Text>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </>
  )
}
