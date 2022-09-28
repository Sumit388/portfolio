import React,{useState,useRef,useEffect} from 'react'
import "./Home1.css";
import bg2 from './data/bg11.jpg';
import fg1 from './data/fg4.png';
import cv from "./data/SumitMishraResume.pdf"
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger);

function Home1() {

    const [offX,setOffX]=useState();
    const ref=useRef();
    ref.current=offX;
    const foreGround=useRef();
    const button1=useRef();
    const button2=useRef();
    const UpperBlock1=useRef();
    const middleBlock1=useRef();
    const middleBlock2=useRef();
    const middleBlock3=useRef();
    const lowerSection1=useRef();
    const lowerSection2=useRef();
    const lowerSection3=useRef();
    const lowerSection4=useRef();

    useEffect(()=>{
        
        gsap.fromTo(foreGround.current,{x:800},{x:0,duration:2});
        gsap.fromTo(UpperBlock1.current,{x:-800},{x:0,duration:2});
        gsap.fromTo(button1.current,{x:0,opacity:0},{x:0,opacity:1 ,duration:1,delay:1});
        gsap.fromTo(button2.current,{x:0,opacity:0},{x:0,opacity:1 ,duration:1,delay:1});
        (window.innerWidth>=750)?gsap.fromTo(middleBlock1.current,{x:-1000},{x:0,delay:1,duration:0.5,ease:"bounce",scrollTrigger:{
            trigger:middleBlock1.current
        }}):gsap.fromTo(middleBlock1.current,{x:-1000},{x:0,duration:0.5,ease:"bounce",scrollTrigger:{
            trigger:middleBlock1.current
        }});
        (window.innerWidth>=750)?gsap.fromTo(middleBlock2.current,{x:-1000},{x:0,delay:0.5,duration:0.5,ease:"bounce",scrollTrigger:{
            trigger:middleBlock2.current
        }}):gsap.fromTo(middleBlock2.current,{x:-1000},{x:0,duration:0.5,ease:"bounce",scrollTrigger:{
            trigger:middleBlock2.current
        }});
        gsap.fromTo(middleBlock3.current,{x:-1000},{x:0,duration:0.5,scrollTrigger:{
            trigger:middleBlock3.current
        }});
        gsap.fromTo(lowerSection1.current,{x:-1000},{x:0,duration:1.5,ease:"circ",scrollTrigger:{
            trigger:lowerSection1.current
        }});
        gsap.fromTo(lowerSection2.current,{x:1000},{x:0,duration:1.5,ease:"circ",scrollTrigger:{
            trigger:lowerSection2.current
        }});
        gsap.fromTo(lowerSection3.current,{x:-1000},{x:0,duration:1.5,ease:"circ",scrollTrigger:{
            trigger:lowerSection3.current
        }});
        gsap.fromTo(lowerSection4.current,{x:1000},{x:0,duration:1.5,ease:"circ",scrollTrigger:{
            trigger:lowerSection4.current
        }});
    },[]);
       
    function something(even){
     setOffX(even.screenX);
    };

  return (
    <div className='fullfrontsec'>
          <div className="landingSec" onMouseMove={something} >
                <img src={bg2}  className="bg2" alt="" style={(window.innerWidth>=750)?{width:`${100+ref.current/100}%`, height: `${100+ref.current/100}%`}:{width:`100%`, height: `100%`}}/>
                <div className="banerFadeButton"/>
                <img src={fg1}  className="fg1" alt=""  />
                <div className="landingSecContent" ref={UpperBlock1} style={(window.innerWidth>=750)?{left:`${70+ref.current/3}px`}:{left:`10px`}}>
                    <h2 >Hey there! A Web developer here.<br></br><span>Sumit Mishra</span></h2>
                    <p  >I started learning how to code and fell in love with Front End Development. Now I just want to learn it all. Learning is fun when you keep creating new stuffs not when you keep memorizing concepts.</p>
                    <span ref={button1}><a  download={cv} href={cv}>Download C.V.</a></span>
                    <span ref={button2}><Link to='/about'>About Me</Link></span>
                </div>
                <ul className="sci">
                    <li><a href="https://www.facebook.com/profile.php?id=100004060201078"><FaFacebookF/></a></li>
                    <li><a href="https://www.instagram.com/me_sumit_mishra/"><FaInstagram/></a></li>
                    <li><a href="https://www.linkedin.com/in/sumit-mishra-697aa3173"><FaLinkedinIn/></a></li>
                    <li><a href="https://github.com/Sumit388"><FaGithub/></a></li>
                </ul>
                <div className="textBlocks" >
                    <div className="blocks">
                        <h3>React Based App</h3>
                        <p>This is not just any other Website, This App is created with React.js. So every webpage link you click here, opens without loading.</p>
                    </div>
                    <div className="blocks">
                        <h3>ScrollTrigger Animation</h3>
                        <p>This page is animated with the GSAP ScrollTrigger. I desinged animations such that it occurs only once when page mounts.</p>
                    </div>
                </div>
           </div>








        <div className="Home1">
        <div className="blocks">
                     <div className="blockglass">
                        <p>Try hovering the cards below for cool hovering effect . This is acheived using only CSS.</p>
                    </div>
                    </div>
            <div className="Home1Quote" >
                <div >
                    <div className="box box1" ref={middleBlock1}>
                        <p>Java is my primary programming language & JS is so versartile. CSS is beautiful & HTML sctructured. React make things easy & Firebase manages my data.</p>
                        <h2>Programming Languages</h2>
                    </div>
                    <div className="Home1bg"></div>
                </div>
                <div>
                    <div className="box box2" ref={middleBlock2}>
                        <p>I have practiced different types of data structures and algos concepts. Including Trees, BST, DP, Stacks & Queues, Heaps & Hashing, Linked Lists, Backtracking, Searching & sorting, 2D Array & more.</p>
                        <h2>Coding Skills</h2>
                    </div>
                    <div className="Home1bg"></div>
                </div>
                <div>
                    <div className="box box3" ref={middleBlock3}>
                        <p>I have given so much time to Music Making & I am quite decent at music composition, Audio & Music mixing, song composition & more. I can also use Premeire Pro & Photoshop.</p>
                        <h2>Other Skills</h2>
                    </div>
                    <div className="Home1bg"></div>
                </div>
            </div>
        </div>





        <div className="Home1textsec">
        <div className="textCenter">
            <div className="textCenter1">C</div>
            <div className="textCenter1">O</div>
            <div className="textCenter1">D</div>
            <div className="textCenter1">E</div>
        </div>
        <div className="Home1textSection1 ">
                <div className="sec1Square1"></div>
                <div className="sec1Square1"></div>
                <div className="sec1Square1"></div>
               <div className="sec1" ref={lowerSection1}>
                <h2>Beautiful Background</h2>
                <p>I used pseudo selctors of this section & added clip-path to create this BG.</p>
                </div>
            </div>
            <div className="Home1textSection1">
            <div className="sec1Square2"></div>
                <div className="sec1Square2"></div>
                <div className="sec1Square2"></div>
                <div className="sec2" ref={lowerSection2}>
            <h2>Hovering Glasses</h2>
                <p>These are divs with specific size properties & added keyframe animation.</p>
                </div>
            </div>
            <div className="Home1textSection1">
            <div className="sec1Square1"></div>
                <div className="sec1Square1"></div>
                <div className="sec1Square1"></div>
                <div className="sec3" ref={lowerSection3}>
            <h2>Code section(visible in wider screen)</h2>
                <p>These are four different divs with flex direction coloumn given to them.</p>
                </div>
            </div>
            <div className="Home1textSection1 ">
            <div className="sec1Square2"></div>
                <div className="sec1Square2"></div>
                <div className="sec1Square2"></div>
                <div className="sec4" ref={lowerSection4}>
            <h2>Glass Effect</h2>
                <p>It is acheived using box-shadows,backdrop-filter and other CSS properties.</p>
                </div>
            </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home1