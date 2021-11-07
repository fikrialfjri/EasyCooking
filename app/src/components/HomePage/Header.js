import React from 'react'
import foodImg from "../../assets/img/header-food.png"
import {
  Form,
  FormControl,
  Button,
  Image,
  Container
} from "react-bootstrap"

export default function Header() {
  return (
    <>
      <div className="d-block d-md-none d-lg-none d-xl-none d-xxl-none" style={{ backgroundColor: "#E9EDF1" }} >
        <Container>
          <Image className="mt-4" src={foodImg} alt="header-food" height={200} />
        </Container>
      </div>
      <div className="header font-style">
        <Container>
          <div className="row p-0">
            <div className="col-12 mt-4 mt-md-5 col-md-6 position-relative">
              <div className="d-none d-lg-block" style={{ height: "70px" }} />
              <div>
                <div className="header-info mb-4">
                  <h1 className="fw-bold">Let's Start Cooking With Popular Recipes</h1>
                  <p className="fs-5">Helping you cook a variety of dishes from all over the world</p>
                </div>
                <div className="search-box d-md-none d-lg-none rounded-1 col-12 shadow" style={{ backgroundColor: "white", width: "100%" }}>
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
                <div className="search-box d-none d-lg-block rounded-1 col-12 shadow" style={{ backgroundColor: "white", width: "130%" }}>
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
                <div className="search-box d-none d-md-block d-lg-none rounded-1 col-12 shadow" style={{ backgroundColor: "white", width: "200%" }}>
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
            <div className="col-12 col-md-6 d-none d-md-block">
              <Image src={foodImg} alt="header-food" fluid />
            </div>
          </div >
        </Container>
      </div>
      <div className="d-none d-lg-block" style={{ height: "200px" }} />
    </>
  )
}
