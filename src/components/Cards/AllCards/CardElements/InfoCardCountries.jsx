import React from 'react'
import InfoCardR from "../../../../reusable/InfoCardR"

const InfoCardCountries = ({item}) => {
  return (
    <InfoCardR className="info-card"
    population={item.population}
    region={item.region}
    capital={item.capital}
    />
  )
}

export default InfoCardCountries