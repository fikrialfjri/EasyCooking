import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavItem } from '../'
import "../../index.css"

export default function NavigationBar() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        variant="light"
        style={{ backgroundColor: "#E9EDF1" }}
      >
        <Container>
          <Navbar.Brand href="#">
            <Link
              to="/"
              className="navItem-style font-style text-decoration-none"
              style={{ color: "#FB7600" }}
            >
              Easy<span style={{ color: "#87A99C" }}>Cooking</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavItem />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
