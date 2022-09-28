import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub,FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className="Footer">
         <footer>
            <div className="FooterWaves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="footersci">
            <li><a href="https://www.facebook.com/profile.php?id=100004060201078"><FaFacebookF/></a></li>
                    <li><a href="https://www.instagram.com/me_sumit_mishra/"><FaInstagram/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCJkA73GYlQeEY_2ru2icflQ"><FaYoutube/></a></li>
                    <li><a href="https://github.com/Sumit388"><FaGithub/></a></li>
                    <li><a href="https://www.linkedin.com/in/sumit-mishra-697aa3173"><FaLinkedinIn/></a></li>
            </ul>
            <ul className="footerMenu">
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/hobbies'>Hobbies</Link></li>
                <li><Link to='/contact'>Contact Me</Link></li>
                <li><Link to='/documentation'>Documentation</Link></li>
            </ul>
            <p>
           Hey! Really happy to have you here.
            </p>
         </footer>
        </div>
    </div>
  )
}

export default Footer