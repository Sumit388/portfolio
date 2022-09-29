import React,{useRef,useState} from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';
import location from './data/location.png'
import mail from './data/mail.png'
import call from './data/call.png'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub,FaYoutube} from 'react-icons/fa'
function ContactMe() {
    const msg1="Send A Message"
    const msg2="Message Sent"
    const msg3="An Error Occured"
    const[TopHeading,setTopHeading]=useState(()=>{return msg1});
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3zqy04c', 'template_d078pwn', form.current, 'mxJd96v-dvxLabnPC')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            setTopHeading(msg2);
            setDefaults();
        }, (error) => {
            console.log(error.text);
            setTopHeading(msg3);
            setDefaults();
        });
    };
   const setDefaults=()=>{
    setTimeout(()=>{
       setTopHeading(msg1);
    },5000)
   }
  return (
    <div className='MainContactMe'>
        <section>
        <div className="ContactContainer">
            <div className="contactInfo">
                <div>
                    <h2>
                        Contact Info
                    </h2>
                    <ul className='info'>
                     <li>
                        <span><img src={location} alt="" /></span>
                        <span>Narayanpur,Rajarhat Gopalpur <br />
                         West Bengal, Kolkata-700 136.</span>
                     </li>
                     <li>
                        <span><img src={mail} alt="" /></span>
                        <span>sumitmishra388@gmail.com.</span>
                     </li>
                     <li>
                        <span><img src={call} alt="" /></span>
                        <span>+91 87773 89498 </span>
                     </li>
                    </ul>
                </div>
                <ul className="ContactMeSci">
                    <li><a href="https://www.facebook.com/profile.php?id=100004060201078"><FaFacebookF/></a></li>
                    <li><a href="https://www.instagram.com/me_sumit_mishra/"><FaInstagram/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCJkA73GYlQeEY_2ru2icflQ"><FaYoutube/></a></li>
                    <li><a href="https://github.com/Sumit388"><FaGithub/></a></li>
                    <li><a href="https://www.linkedin.com/in/sumit-mishra-697aa3173"><FaLinkedinIn/></a></li>
                </ul>
            </div>
            <div className="contactForm">
                <h2>{TopHeading}</h2>
                <form ref={form} onSubmit={sendEmail} className='formBox'>
       <div className="inputRow">
      <div className="inputBox w50"><label>Name</label>
      <span><input type="text" name="user_name" /></span></div>

      <div className="inputBox w50"><label>Email</label>
      <span><input type="email" name="user_email" /></span></div></div>

      <div className="inputRow"><div className="inputBox w100"><label>Message</label>
      <span><textarea name="message" /></span></div></div>

      <div className="inputRow"><span><input type="submit" value="Send" /></span>
      <span><input type="reset" value="Reset" /></span></div>
      <div className="inputRow">
        <div className="ContactparaDesc"><p>
            This form works on EMAILJS, so every message you send me from here will instantly go into my Gmail Inbox. You can also try reaching me with the contact infomation provided on this page.
        </p></div>
      </div>
    </form>
            
            </div>
        </div>
        </section>
       
    </div>
  )
}

export default ContactMe