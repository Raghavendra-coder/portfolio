import React from 'react'
import "./footer.css";
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">Raghavendra</a>
      <ul className='permalinks'>
        <li><a href='#'>Top</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/raghavendra-kesari-7b113b209/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Raghavendra-coder' target="_blank"><BsGithub/></a>
        <a href='https://instagram.com/arist0tal?igshid=NTc4MTIwNjQ2YQ==' target="_blank"><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer