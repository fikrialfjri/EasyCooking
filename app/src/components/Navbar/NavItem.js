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
  const navItem = "navItem-style font-style text-decoration-none"

  return (
    <Nav className="ms-auto">
      <Nav.Link href="#">
        <Link to="/category" className={navItem} style={{ color: "#333" }}>Category</Link>
      </Nav.Link>
      <Nav.Link href="#">
        <Link to="/favourite" className={navItem} style={{ color: "#333" }}>Favourite</Link>
      </Nav.Link>
    </Nav>
  )
}
