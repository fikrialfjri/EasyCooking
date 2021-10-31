import React from 'react'
import { Card } from 'react-bootstrap';

export default function CategoryCard({ category }) {
  return (
    <div className="item bg-dark text-white rounded-2">
      <Card.Img src={category.strCategoryThumb} alt={`${category.strCategory} Image`} fluid />
      <Card.ImgOverlay>
        <Card.Title className="p-2 rounded-2 text-center position-absolute" style={{ backgroundColor: "#FB7600" }}>{category.strCategory}</Card.Title>
      </Card.ImgOverlay>
    </div>
  )
}
