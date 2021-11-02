import React from 'react'
import foodImg from "../../assets/img/header-food.png"
import {
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap"

export default function Header() {
  return (
    <>
      <div className="header font-style">
        <div className="row container mx-auto p-0">
          <div className="col-6 position-relative" style={{ bottom: "-90px" }}>
            <div className="position-absolute">
              <div className="header-info mb-4">
                <h1 className="fw-bold">Let's Start Cooking With Popular Recipes</h1>
                <p className="fs-5">Helping you cook a variety of dishes from all over the world</p>
              </div>
              <div className="search-box rounded-1 position-absolute col-12 shadow" style={{ backgroundColor: "white", width: "130%" }}>
                <div className="p-3">
                  <h3 className="fs-6">Search Recipe</h3>
                  <Form className="d-flex position-relative align-items-center">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2 form-control"
                      aria-label="Search"
                    />
                    <div className="button-search">
                      <Button className="button rounded-0">Search</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image src={foodImg} alt="header-food" fluid />
          </div>
        </div >
      </div>
      <div style={{ height: "200px" }} />
    </>
  )
}
