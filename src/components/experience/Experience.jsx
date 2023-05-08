import React from 'react'
import "./experience.css";
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {Frontend, Backend, MachineLearning} from "./ExpData";

function fdata(val){
  return(
    <article className='experience__details'>
      <BsFillPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>{val.name}</h4>
      <small className='text-light'>{val.experience}</small>
      </div>
    </article>
  )
}

const Experience = () => {
  return (
    <section id='experience' className='experience-section'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {Frontend.map(fdata)}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {Backend.map(fdata)}
          </div>
        </div>

        <div className='experience__ml'>
          <h3>Machine Learning</h3>
          <div className='experience__content'>
            {MachineLearning.map(fdata)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience