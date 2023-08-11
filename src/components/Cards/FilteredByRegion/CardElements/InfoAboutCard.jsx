import React from 'react'
import InfoCardR from "../../../../reusable/InfoCardR"

const InfoAboutCard = ({item}) => {
  return (
    <InfoCardR 
    population={item.population}
    region={item.region}
    capital={item.capital}
    />
  )
}

export default InfoAboutCard