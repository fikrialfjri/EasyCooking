import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <div className="item text-white rounded-2" style={{ backgroundColor: "#E9EDF1" }}>
      <Link to={`/recipes/filter-by-category=${category.strCategory}`} className="text-dark text-decoration-none">
        <Card.Img className="p-5" src={category.strCategoryThumb} alt={`${category.strCategory} Image`} fluid />
        <Card.ImgOverlay>
          <Card.Title className="p-2 rounded-2 text-center position-absolute" style={{ backgroundColor: "#FB7600" }}>{category.strCategory}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </div>
  )
}
