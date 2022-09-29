import React,{useState,useRef} from 'react'
import './Hobbies.css'
import vid2 from "./data/vid2.mp4"
import vid3 from "./data/vid3.mp4"
import vid4 from "./data/vid4.mp4"
import vid5 from "./data/vid5.mp4"
import thumb1 from "./data/thumb1.jpg"
import thumb2 from "./data/thumb2.jpg"
import thumb3 from "./data/thumb3.jpg"
import thumb4 from "./data/thumb4.jpg"
import {FaFacebookF,FaInstagram,FaYoutube,FaVolumeMute,FaVolumeUp} from 'react-icons/fa'


function Hobbies() {
    const desc0="Hey! I have listed all my hobbies in above tabs. These are the other things I like beside coding. Click on the those above tabs to know more."
    const desc1="I have been singing, I cant remeber since when. I have trained in semi-classical Singing for two years. You can already see the videos beside so do I need to mention how much I love singing."
    const desc2="I love writing poems and lyrics( Writing lyrics a little more though). When good composition is complimented by good lyrics, Oh now that's LOVE!! "
    const desc3="I wrote my first song when I was in class 10. Since then I have written so many, I can't even remeber."
    const desc4="Music Making is my another love. And I am loyal to everything & everyone I love. If you are watching the videos right now, I don't need to explain anything more about my music making skills."
    const desc5="Guitar looked so fascinating to me when I was in my school, So I learned it. Thought I am not that good at it, I love playing guitar sometimes when I have spare time."
    const desc6="Youtube. Oh I have posted more than 100 videos on youtube & I still do post. It's like an habit now."
    const [videoNumber,setvideoNumber]=useState(()=>{return vid3});
    const [desc,setdesc]=useState(()=>{return desc0});
    const [Muted,SetMuted]=useState(()=>{return false});
    const Mute=useRef();
    const videoMute=()=>{
        if(Mute.current.muted===true){
            SetMuted(false);
            Mute.current.muted=false;
        }
        else {
            SetMuted(true);
            Mute.current.muted=true;
        }
    }
    return (
        <div className='hobbiesMain'>
            <div className="hobbies">
                <div className="HobbiesSocial">
                <ul className="HobbiesSocialsci">
                    <li><div onClick={videoMute}>{Muted?<FaVolumeMute/>:<FaVolumeUp/>}</div></li>
                    <li><a href="https://www.instagram.com/me_sumit_mishra/"><div><FaInstagram/></div></a></li>
                    <li><a href="https://www.youtube.com/channel/UCJkA73GYlQeEY_2ru2icflQ"><div><FaYoutube/></div></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100004060201078"><div><FaFacebookF/></div></a></li>
                </ul>
                </div>
                <section className="HobbiesSection">
                   <video src={videoNumber} type='video/mp4' id='slider' loop autoPlay ref={Mute}>
                    
                    </video>
                    <ul className="videoNvigation">
                        <li onClick={()=>{setvideoNumber(vid2);console.log(videoNumber);}}>
                            <img src={thumb1} alt="" />

                        </li>
                        <li onClick={()=>{setvideoNumber(vid3);console.log(videoNumber);}}>
                            <img src={thumb2} alt="" />

                        </li>
                        <li onClick={()=>{setvideoNumber(vid4);console.log(videoNumber);}}>
                            <img src={thumb3} alt="" />
                        </li>
                        <li onClick={()=>{setvideoNumber(vid5);console.log(videoNumber);}}>

                            <img src={thumb4} alt="" />
                        </li>
                    </ul>
                    <div className="HobbiesText1">
                        <h2>THESE AND I HAVE MANY MORE</h2>
                    </div>
                </section>
                <div className="HobbiesRightPanel">
                    <div className="hobbiesListHeading"><h2>OH! WHY DO I LOVE THESE THINGS SO MUCH?</h2></div>
                   <div className="HobbiesList">
                    <div className="firstBox" onClick={()=>setdesc(desc1)}>Singing</div>
                    <div className="firstBox" onClick={()=>setdesc(desc2)}>Writing Lyrics</div>
                    <div className="firstBox" onClick={()=>setdesc(desc3)}>Composing Songs</div>
                    <div className="firstBox" onClick={()=>setdesc(desc4)}>Music Making</div>
                    <div className="firstBox" onClick={()=>setdesc(desc5)}>Playing Guitar</div>
                    <div className="firstBox" onClick={()=>setdesc(desc6)}>Youtube</div>
                   </div>
                   <div className="hobbiesDesc"> <p>
                     {desc}
                    </p></div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies