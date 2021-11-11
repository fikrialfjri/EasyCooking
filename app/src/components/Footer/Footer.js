import React from 'react'
import { Container } from 'react-bootstrap';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="page-footer text-white mt-5 font-style" style={{ backgroundColor: "#FB7600" }}>
      <Container>
        <div className="footer-copyright d-flex py-3 align-items-center justify-content-center">
          <div className="me-2">© 2021 Copyright: fikrialfjri</div>
          <a
            href="https://www.instagram.com/fikrialfjri"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaInstagram className="me-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/fikrialfjri"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaLinkedin className="me-1" />
          </a>
          <a
            href="https://github.com/fikrialfjri"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaGithub />
          </a>
        </div>
      </Container>
    </footer>
  )
}
