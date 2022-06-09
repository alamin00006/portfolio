import React from 'react';
import '../Pages/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import Typewriter from 'typewriter-effect';
import alamin from '../images/DSC_0076-removebg-preview.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="w-100 home">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-6 homeText">
                        <div>
                            <h3 className="welcome">WELCOME!
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
                            <p>
                                I am a Front end Developer with 6 months experience
                                I am a Front end Developer with 6 months experience
                                I am a Front end Developer with 6 months experience
                            </p>
                            <div className="icons">
                          <a href="https://github.com/alamin00006">    <FontAwesomeIcon icon={faCoffee} /></a>
                          <a href="https://github.com/alamin00006">    <FontAwesomeIcon icon={faCoffee} /></a>
                          <a href="https://github.com/alamin00006">    <FontAwesomeIcon icon={faCoffee} /></a><br/>
                          <button className='resume rounded'> <a href="https://drive.google.com/file/d/1m2qL9PiBGvZD9pJkwJMCcAAFFsygEzd1/view?usp=sharing" target='_blank' > Download Resume</a>  </button>
                           
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 homeImage">
                        <img className='w-100' src={alamin} alt="Al Amin"></img>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;