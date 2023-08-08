import React from 'react'

const ImgCard = ({data}) => {
  return (
    <img
    src={data.flags.svg}
    alt="images-countries"
    className="img-countries"
  />
  )
}

export default ImgCard