import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import mario from './data/mario.png'
import netflix from './data/netflix.png'
function Projects() {
  return (
    <div className='projectsBody'>
        <div className="projectsContainer">
            <div className="projectBox">
                <Link to='/mario'>
                <div className="projectContent">
                    <img src={mario} alt="" />
                    <p>Here is my attempt on making classic 2d game (with HTML & JS) that has been fan favoirite for decades</p>
                </div></Link>
            </div>
            <div className="projectBox">
                <div className="projectContent">
                    <img src="" alt="" />
                    <p className='demandedChange'>Hey! Recently my hard disk died, and I lost many projects( Yes! I did not pust it to the Github). So this section might look empty now, but many great projects will be here soon. </p>
                </div>
            </div>
            <div className="projectBox">
            <a href="\#">
                <div className="projectContent">
                    <img src="" alt="" />
                    <p>Coming really soon.</p>
                </div></a>
                </div>
                <div className="projectBox">
                <div className="projectContent">
                    <img src="" alt="" />
                    <p className='demandedChange'>This sections is made completly with the help of CSS grids with only one break point of 991 pixels. That means when your screen width is below 991 pixel, Grid layout changes to unset.</p>
                </div>
            </div>
            <div className="projectBox">
            <a href="\#">
                <div className="projectContent">
                    <img src="" alt="" />
                    <p>PROJECTS</p>
                </div></a>
            </div>
            <div className="projectBox">
            <Link to="/netflix">
                <div className="projectContent">
                    <img src={netflix} alt="" />
                    <p>A serious clone of Natflix with playable trailers & more.</p>
                </div></Link>
            </div>
            <div className="projectBox">
            <a href="\#">
                <div className="projectContent">
                    <img src="" alt="" />
                    <p>Coming really soon.</p>
                </div></a>
            </div>
           
        </div>
    </div>
  )
}

export default Projects