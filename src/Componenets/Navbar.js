import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {FaHome,FaInfo,FaProjectDiagram,FaMusic,FaFile,FaPhone} from 'react-icons/fa'
import me1 from './data/me1.jpg'

function Navbar() {
    const [navActive,setNavActive]=useState(false);
    const toggle=()=>{
        setNavActive(!navActive);
    }
  return (
    <div>
      <div className="menuoptions">
        <div className={navActive?"navigation active":"navigation"}>
            <div className="userbox">
             <div className="imgBox">
                <Link to="/"><img src={me1} alt="" /></Link>
             </div>
             <p className="userName"> <Link to="/">Sumit Mishra</Link> </p>
            </div>
            <div className="menuToggle" onClick={toggle}></div>
            <ul className="menu">
                <li><Link to="/"><div className="options"><FaHome/><span>Home</span></div></Link></li>
                <li><Link to='/about'><div className="options"><FaInfo/><span>About Me</span> </div></Link></li>
                <li><Link to='/projects'><div className="options"><FaProjectDiagram/><span>Projects</span></div></Link></li>
                <li><Link to='/hobbies'><div className="options"><FaMusic/><span>Hobbies</span> </div></Link></li>
                <li><Link to='/contact'><div className="options"><FaPhone/><span>Contact Me</span></div></Link></li>
                <li><Link to='/documentation'><div className="options"><FaFile/> <span>Documentation</span></div></Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar