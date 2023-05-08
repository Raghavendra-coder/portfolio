import React from 'react'
import "./about.css";
import ME from "../../assets/me-and-snow.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='raghavendra'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>About 2Years Total Experience</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>About 2Years Total Experience</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>

          </div>

          <p>
          Hi I am Raghavendra Kesari ! A skilled Full Stack Developer with almost 2 years of total experience in Python development. 
          My expertise lies in development using Django, REST API, and front-end technologies like React.js. 
          With a strong background in machine learning and database management, I have successfully delivered projects 
          integrating various APIs and payment gateways. I ams a dedicated and detail-oriented professional, passionate about 
          creating innovative solutions. My drive for continuous learning and problem-solving makes me a valuable 
          asset to any development team. 
          </p>

          <a href='#contact' className='btn btn-primary'>Have a Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About