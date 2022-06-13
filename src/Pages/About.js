import React from 'react';
import '../Pages/About.css'

import alamin from '../images/DSC_0076-removebg-preview.png'

const About = () => {
    return (
        <div className="bg-black pt-5">
            <div className="container">
                <h1 id='about' className='text-center text-white aboutMe'>ABOUT <span >ME</span></h1>
                <hr />
                <div className="home-container row pt-5">

                <div className="homeImage col-12 col-md-6 col-lg-6">
                        <img src={alamin} alt="Al Amin"></img>
                    </div>


                    <div className="col-12 col-md-6 col-lg-6 homeText">
                        <div>
                            
                            <p className='fs-4'>
                            <span className='fs-4 aboutDescription'>I am Mohammad Al Amin. </span>
                            I am a Front-End WEB Developer. I am working with React, Node.js, and MongoDB. I also have experience in developing static websites using HTML5, CSS3, and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency.
                            </p>
                        
                        </div>
                    </div>

                  
                </div>

            </div>
        </div>
    );
};

export default About;