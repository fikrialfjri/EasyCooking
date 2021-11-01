import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Nav,
  NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../index.css"
import { fetchCategoriesAsync } from '../../store/actions/categories'

export default function NavItem() {
  const navItem = "navItem-style font-style text-decoration-none"

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categoriesState)

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [])

  return (
    <Nav className="ms-auto align-items-center">
      <Nav.Link href="#">
        {/* <Link to="/category" className={navItem} style={{ color: "#333" }}>Category</Link> */}
        <NavDropdown className={navItem} style={{ color: "#333" }} title="Category" id="navbarScrollingDropdown">
          {
            categories.map((category) => {
              return (
                <NavDropdown.Item href="#">
                  <Link style={{ color: "#333", textDecoration: "none", display: "block" }} to={`/recipes/filter-by-category=${category.strCategory}`}>
                    {category.strCategory}
                  </Link>
                </NavDropdown.Item>
              )
            })
          }
        </NavDropdown>
      </Nav.Link>
      <Nav.Link href="#">
        <Link to="/favourite" className={navItem} style={{ color: "#333" }}>Favourite</Link>
      </Nav.Link>
    </Nav>
  )
}
