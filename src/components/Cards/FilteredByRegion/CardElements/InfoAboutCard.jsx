import React from 'react'
import InfoCardR from "../../../Reusable/InfoCardR"

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