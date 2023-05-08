import React from 'react'
import  "./portfolio.css";
import { PortfolioData } from './PortfolioData';

function portfolio(val){
  return(<>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={val.image} alt='portfolio_image'/>
      </div>
      <h3>{val.title}</h3>
      <a href={val.link} target="_blank" className='btn'>Go To</a>
    </article>
  </>)
}

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {PortfolioData.map(portfolio)}
      </div>
    </section>
  )
}

export default Portfolio