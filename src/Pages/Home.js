import React from 'react';
import '../Pages/Home.css'
import Typewriter from 'typewriter-effect';
import alamin from '../images/DSC_0076-removebg-preview.png';


const Home = () => {
    return (
        <div className=" w-100 home">
            <div className="container">
                <div className="home-container row pt-5">
                    <div className="homeText col-12 col-md-6 col-lg-6">
                        <div className=''>
                            <h3 className="welcome">WELCOME TO MY PROFILE!
                            </h3>
                            <h1>
                               <Typewriter
                               options={
                                   {
                                      autoStart:true,
                                       loop: true,
                                       delay: 60,
                                       strings:['I AM A FRONT END DEVELOPER', 'I AM A MERN STACK DEVELOPER']
                                   }
                               }
                               /> 
                            </h1>
                            <p className='fs-4'>
                            I am a Front-End WEB Developer. I am working with React, Node.js, and MongoDB. I also have experience in developing static websites using HTML5, CSS3, and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency.
                            </p>
                            <div className="icons">
                          <a href="https://github.com/alamin00006"> </a>
                          <button className='resume p-3'> <a href="https://drive.google.com/file/d/1m2qL9PiBGvZD9pJkwJMCcAAFFsygEzd1/view?usp=sharing" target='_blank'>
                              
                          DOWNLOAD RESUME</a>  </button>
                           
                         
                            </div>
                        </div>
                    </div>

                    <div className="homeImage col-12 col-md-6 col-lg-6">
                    <img src={alamin} class="rounded-0" alt="..."/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;