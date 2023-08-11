import React from 'react'
import CardBodyR from "../../../../reusable/CardBodyR"

const CardBodyCountries = ({item}) => {
  return (
    <CardBodyR
    item={item}
    imageSrc={item.flags.svg}
    title={item.name} 
    linkTo={`/countries/${item.name}`}
  />
  )
}

export default CardBodyCountries