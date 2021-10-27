import React from 'react'
import {
  Nav,
  // Form,
  // FormControl,
  // Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../index.css"

export default function NavItem() {
  return (
    <Nav className="ms-auto">
      <Nav.Link href="#">
        <Link to="/category" className="navItem-style text-decoration-none" style={{ color: "#333" }}>Kategori</Link>
      </Nav.Link>
      <Nav.Link href="#">
        <Link to="/favourite" className="navItem-style text-decoration-none" style={{ color: "#333" }}>Favorit</Link>
      </Nav.Link>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          className="form-control bg-transparent text-white"
        />
        <Button style={{backgroundColor}}>Search</Button>
      </Form> */}
    </Nav>
  )
}
