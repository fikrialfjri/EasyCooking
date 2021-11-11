import React from 'react'
import comingSoon from "../assets/img/coming-soon.png"
import { Image } from 'react-bootstrap'

export default function FavoritPage() {
  return (
    <div style={{ backgroundColor: "#E9EDF1" }}>
      <Image
        src={comingSoon}
        alt="coming-soon-image"
        className="mx-auto d-block"
        fluid
      />
    </div>
  )
}
