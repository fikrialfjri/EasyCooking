import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Nav,
  NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../index.css"
import { fetchCategoriesAsync } from '../../store/actions/categories'
import { fetchAreasAsync } from '../../store/actions/areas'

export default function NavItem() {
  const navItem = "navItem-style font-style text-decoration-none"

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categoriesState)
  const { areas } = useSelector(state => state.areasState)

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
    dispatch(fetchAreasAsync())
  }, [dispatch])

  return (
    <Nav
      className="ms-auto align-items-start align-items-md-center"
      style={{ maxHeight: '300px' }}
      navbarScroll
    >
      <NavDropdown
        className={`${navItem}`}
        style={{ color: "#333", maxHeight: "100px" }}
        title="Category"
        id="navbarScrollingDropdown"
      >
        {
          categories.map((category) => {
            return (
              <NavDropdown.Item href="#">
                <Link
                  to={`/recipes/category=${category.strCategory}`}
                  style={{ color: "#333", textDecoration: "none", display: "block" }}
                >
                  {category.strCategory}
                </Link>
              </NavDropdown.Item>
            )
          })
        }
      </NavDropdown>
      <NavDropdown
        className={navItem}
        style={{ color: "#333" }}
        title="Area"
        id="navbarScrollingDropdown"
      >
        {
          areas.map((area) => {
            return (
              <NavDropdown.Item href="#">
                <Link
                  to={`/recipes/area=${area.strArea}`}
                  style={{ color: "#333", textDecoration: "none", display: "block" }}
                >
                  {area.strArea}
                </Link>
              </NavDropdown.Item>
            )
          })
        }
      </NavDropdown>
      <Nav.Link href="#">
        <Link
          to="/favourite"
          className={navItem}
          style={{ color: "#333" }}
        >
          Favourite
        </Link>
      </Nav.Link>
    </Nav>
  )
}
