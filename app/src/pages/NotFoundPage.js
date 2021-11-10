import React from 'react'
import notFoundImg from "../assets/img/not-found.png"
import { Image } from 'react-bootstrap'

export default function NotFoundPage() {
  return (
    <div>
      <Image
        src={notFoundImg}
        alt="not-found-image"
        className="mx-auto d-block"
        style={{
          height: "53%",
          width: "53%"
        }}
        fluid
      />
    </div>
  )
}
