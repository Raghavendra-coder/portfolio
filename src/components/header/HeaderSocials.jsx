import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/raghavendra-kesari-7b113b209/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Raghavendra-coder' target="_blank"><BsGithub/></a>
        <a href='https://instagram.com/arist0tal?igshid=NTc4MTIwNjQ2YQ==' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials