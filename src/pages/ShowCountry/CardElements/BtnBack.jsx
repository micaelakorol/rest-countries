import React from 'react'
import { NavLink } from 'react-router-dom'
import arrowLeft from "../../../assets/icons/arrow-left.svg";

const BtnBack = () => {
  return (
    <NavLink to={"/"} className="back" alt="back">
    {" "}
    <img src={arrowLeft} alt="button-back" /> Back{" "}
  </NavLink>
  )
}

export default BtnBack