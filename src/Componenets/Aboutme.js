import React, { useState } from 'react'
import './Aboutme.css'
import me2 from './data/me2.png'

function Aboutme() {
  const [dispCont, setDispCont] = useState(() => { return 0; })
  const funcChecked1 = () => {
    if (dispCont !== 1){ setDispCont(1); console.log(dispCont);}
    else setDispCont(0);
  }
  const funcChecked2 = () => {
    if (dispCont !== 2) { setDispCont(2); console.log(dispCont);}
    else setDispCont(0);
  }
  const funcChecked3 = () => {
    if (dispCont !== 3) { setDispCont(3); console.log(dispCont);}
    else setDispCont(0);
  }
  const funcChecked4 = () => {
    if (dispCont !== 4) { setDispCont(4); console.log(dispCont);}
    else setDispCont(0);
  }
  return (
    <div>
      <div className="AboutMeSec">
        <section className="aboutMe">
          <div className="aboutLayer layer1"></div>
          <div className="aboutLayer layer2"></div>
          <div className="aboutLayer layer3"></div>
          <div className="aboutLayer layer4">
            <div className="layer4text">
              <p>
                This webpage was completely created with the
                <br />help of CSS, and contains only one image.
                <br />Everything else is an element which has been
                <br />provided with different values of z-indexes to
                <br />make this cool effect of one item hiding behind the other.
              </p>
            </div>
          </div>
          <div className="aboutLayer layer5"></div>
          <div className="aboutLayer layer6"></div>
          <div className="aboutLayer layer7"></div>
          <div className="aboutLayer layer8">
            <div className="BoutLoaderImg">
              <img src={me2} alt="" /></div>
          </div>
          <div className="aboutLayer layer9"></div>


          <div className="mainaboutContainer">
            <div className="aboutTab">
              <input type="radio" name="acc" id="acc1" />
              <label htmlFor="acc1" onClick={funcChecked1}>
                <h2>01</h2>
                <h3>Brief</h3>
              </label>
              <div className={dispCont===1?"aboutTabContent  openedTab":"aboutTabContent"}>
                <p>I code because I love it. I learn because I am curios. 
                  <br/>I got introduced to java when I was in class 9 & loved the concept of writing some lines to make computer do the work for me.</p>
              </div>
            </div>
            <div className="aboutTab">
              <input type="radio" name="acc" id="acc2" />
              <label htmlFor="acc2" onClick={funcChecked2}>
                <h2>02</h2>
                <h3>My Skils</h3>
              </label>
              <div className={dispCont===2?"aboutTabContent openedTab":"aboutTabContent"}>
                <p>Java, OOPs, DSA, JavaScript, CSS, HTML, React.js. I also have some knowlegde of Firebase, Tailwind CSS, Git, Bootstrap. </p>
              </div>
            </div>
            <div className="aboutTab">
              <input type="radio" name="acc" id="acc3" />
              <label htmlFor="acc3" onClick={funcChecked3}>
                <h2>03</h2>
                <h3>Education</h3>
              </label>
              <div className={dispCont===3?"aboutTabContent openedTab":"aboutTabContent"}>
                <p>Electrical Engineering (B.tech, MAKAUT) 2020 graduate with 8.58 CGPA(never had backlogs).
                   <br/>X<sup>th</sup> (from ICSE board)  2014 with 83.3% marks average (Sceince, Math & Computer).
                   <br/>XII<sup>th</sup> (from ISC board)  2016 with 78.4% marks average (Sceince, Math & Computer).
                </p>
              </div>
            </div>
            <div className="aboutTab">
              <input type="radio" name="acc" id="acc4" />
              <label htmlFor="acc4" onClick={funcChecked4}>
                <h2>04</h2>
                <h3>Experience</h3>
              </label>
              <div className={dispCont===4?"aboutTabContent openedTab":"aboutTabContent"}>
                <p>This section will be updated soon enough, so please visit me again.</p>
              </div>
            </div>

            <h1>Everything About Me</h1>
          </div>

          <div className="aboutBalls">
            <div className="balls ball1"></div>
            <div className="balls ball2"></div>
            <div className="balls ball3"></div>
            <div className="balls ball4"></div>
            <div className="balls ball5"></div>
            <div className="balls ball6"></div>
            <div className="balls ball7"></div>
            <div className="balls ball8"></div>
          </div>


        </section>
        <div className="Aboutloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="loaderText">
          <h2>AN EXPERT WEB DEVELOPER<br />IN LOADING</h2>
        </div>
      </div>
    </div>
  )
}

export default Aboutme