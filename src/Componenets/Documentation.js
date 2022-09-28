import React from 'react';
import './Documentation.css'

function Documentation() {
  return (
    <div>
        <div className="DocumentationSec">
            <div className="documentationbg">

            </div>
            <div className="documentationtext">
               <div className="documentationheading"> <h2>
                    About this page
                </h2>
                </div>
                <div className="documentationpara">
                <p>
                    <ul>
                        <li>
                            You can just click on my Image or my name in Menubar to reach Home page, you don't need to open the Menubar for options.
                        </li>
                        <li>
                            Normal navbars were too cliche so I tried making this one.
                        </li>
                        <li>
                            I have taken ispiration from multiple location for this web page.
                        </li>
                        <li>
                            Multiple react hooks like useSate, useEffect, useRef are used to acheive certain effects.
                        </li>
                        <li>
                            I tried to keep UI as clean as possible. That is the reason why I removed some of the unnecessory element while adjusting the web page for the mobiles. 
                        </li>
                        <li>
                            This app is completely responsive with each page is designed with multiple break-points.
                        </li>
                        <li>
                            Although, if you are viewing this in mobile please open the app with bigger screens too. As it looks more visually pleasing in wider screens.
                        </li>
                          <li>
                            I tried to implement the elements that are trending like glass-morphism.
                         </li>
                         <li>
                            I could have easily implemented more animation but I tried keeping it low, so that it does not affect the usability of the app.
                         </li>
                          <li>
                            The backgrounds of this app are mostly created and are not images. These are created with some divs in some cases or with pseudo selectors for some divs in some cases.
                          </li>
                          <li>
                            This app uses React Router DOM to link one pages to another and that is why pages never reload.
                          </li>
                          <li>
                            I added animation on different elements once I completed the App on the Home page using GSAP Scroll trigger. Note that I could have done the same using javascript but it would have taken more time.
                          </li>
                          <li>
                            The animation added to the elements uses Scroll trigger, that means animation activates once the element comes into view. Note that I could have implemented the scroll trigger when element reaches the certain view height while scrolling, or animation controlled directly with scrollbar could have been  also implemented. But I did not think those were necessary and hence I did not implement them.
                          </li>
                          <li>
                            Some features only activate while cursor hovers on element, so could not be implemented for the mobile screens.
                          </li>
                          <li>
                            This is the third protfolio website that I am making for myself. I rejected the first one as it did not look that good to me. And second time my hardisk died and all my files got deleted.
                          </li>
                          <li>
                            If you are still not impressed by my work you can try going to the project section and try viewing my other projects.
                          </li>
                    </ul>
                </p>
                </div>
                <div className="documentationheading"> <h2>
                    About Me
                </h2>
                </div>
                <div className="documentationpara">
                <p>  
                    <ul>
                       <li>
                        I am not professional or some kind of genius, I am just student who is exploring and trying to learn new things and that is what I will always be. Therefor I might have made some mistakes, mistakes, that I will surely rectifty in future.
                       </li>
                       <li>
                         Though I am not from an IT background (graduate in B.Tech EE)coding is a passion for me. It is something I love. Last 2 year working for a core company made me realise it. 
                       </li>
                       <li>
                        I have always been a good student and was always at the top of my class in my college, I need not mention that I never had a backlog or failed any of my academics exam.
                       </li>
                       <li>
                        I have been born and brought up in Kolkata. I originally belong to Bihar. Therefor I am comforatable in four languages including Hindi, English, Maithili, Bengali.
                       </li>
                        <li>
                          I like challenging myself. Everytime I have some kind of doubt in my mind that I wont be able to do something, I always force myself to do it just to prove my doubts wrong.
                        </li>
                        <li>
                            I was always found of music and that is the reason why I learned so many things that connects me to it. Music making, song composition, Lyrics writing, semi-classical singing, audio mixing and much more.
                        </li>
                        <li>
                            Creating something from the scratch gives me immense pleasure that is the reason why I love making song & web development so much. 
                        </li>
                    </ul>
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Documentation