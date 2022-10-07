/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useData } from '../../services/service'
import Spinners from '../Pures/Spinners'
import '../../styles/infoCard.css'
import { v4 as uuidv4 } from 'uuid';
import arrowLeft from '../../icons/arrow-left.svg'
const InfoCard = () => {

let params = useParams()
const {data, loading, error} = useData(`https://restcountries.com/v2/name/${params.id}`)

if(loading){
  return <Spinners/>
}
if(error !== ''){
  return alert('Error')
}

  return (
    <main>
        {data.map((data) => (
            <div className='container-dinamic' key={uuidv4()}>
            <section className='btn-dinamic'>
            <NavLink to={'/'} className='back' alt='back'>  <img src={arrowLeft} alt="return-back" /> Back </NavLink>
            </section>
            <div className='container-card'>
            <div className='card-img'>
            <img src={data.flags.svg} alt="images-countries" className='img-countries'/>
            </div> 
            <div className='container-info'>
            <section className='body-card'>
            <h2>{data.name}</h2>
            <p>Native Name: {data.nativeName}</p>
            <p>Population: {data.population}</p>
            <p>Region: {data.region}</p>
            <p>Sub Region: {data.subregion} </p>
            <p>Capital: {data.capital}</p>
            </section>
            <section className='other-info'>
            <p>Top Level Domain: {data.topLevelDomain}</p>
            <p>Currencies: {data.currencies[0].code}</p>
            <p>Languages: {data.languages[0].name}</p> </section>
            <section className='geographical'>
              <p>Border Countries: {data.borders.slice(0,3).join(' - ')}</p>  
            </section>
            </div></div>
            </div>
        ))}
    </main>
  )
}

export default InfoCard