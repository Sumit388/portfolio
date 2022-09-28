import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import './Allfeeds.css'


function Allfeeds(props) {
    
    const [feeds, setfeeds] = useState();
   const host="http://localhost:5000";
   const postData=async ()=>{
 const response = await fetch( `${host}/api/admin` , {
        method: 'POST',
        headers: {
        }
      });
     const json=await response.json();
     setfeeds(json);
   }
   
    
useEffect(() => {
  postData();
}, [])




  return (
    <div className="Allfeeds">
        <div className="testimonials">
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {feeds.map((feed)=>{
            return (
                <SwiperSlide>
                <div className="testimonialCards">
                    <div className="testimoniallayer">
    
                    </div>
                    <div className="testimonialContent">
                        <p>
                           {feed.description}
                        </p>
                        <div className="testimonialImgbox">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/>
                        </div>
                        <div className="testimonialDetails">
                            <h2>
                                {feed.user.name} 
                                <br />
                                <span>{feed.date}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            )
        })}
        
      
      
      </Swiper>
    </>
        </div>
    </div>
  )
}

export default Allfeeds