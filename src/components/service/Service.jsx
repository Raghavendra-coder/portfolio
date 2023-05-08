import React from 'react'
import "./service.css";
import {BiCheck} from "react-icons/bi";
import { Development } from './ServiceData';


function serviceItems(data){
  return (
    <li>
      <BiCheck className='service__list-icon'/>
      <p>{data.name}</p>
    </li>
  )
}

function servicedata(data){
  return (
    <article className='service'>
      <div className='service__head'>
        <h3>{data.Tech}</h3>
      </div>
      <ul className='service__list'>
        {data.data.map(serviceItems)}
      </ul>
    </article>
  )
}


const Service = () => {
  
  return (
    <section id='services'>
      <h5>What Will You Get</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {Development.map(servicedata)}
      </div>
    </section>
  )
}

export default Service