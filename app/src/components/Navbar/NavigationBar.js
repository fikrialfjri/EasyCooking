import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { NavItem } from '../'
import "../../index.css"

export default function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/" className="navItem-style text-decoration-none" style={{ color: "#FB7600" }}>Mau<span style={{ color: "#87A99C" }}>Masak</span></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavItem />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
