import React from 'react';
import '../Pages/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import Typewriter from 'typewriter-effect';
import alamin from '../images/DSC_0076.JPG'
const Home = () => {
    return (
        <div className="w-100 home">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
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
                           <a href="https://github.com/alamin00006">    <FontAwesomeIcon icon={['fab', 'google']} /></a>
                           
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <img className='w-75' src={alamin} alt="Al Amin"></img>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;