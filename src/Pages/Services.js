import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import '../Pages/Service.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect( () =>{
        AOS.init({duration:2000})
    }, [])
    return (
        <div className='services p-5'>
            <div className='servicesText pt-3'>
                <h3>MY <span>SERVICES</span></h3>
                <hr />
            </div>
            <div className='container text-center mt-5'>
            <div className='row'> 
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='fade-right'>
            <div className='border service p-4'>
                <p className="serviceIcon"><span className="border p-2"> <FontAwesomeIcon icon={faCode}/>  </span></p>
                <h5>WEB DEVELOPMENT</h5>
                <p>I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service</p>

            </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='zoom-in'>
            <div className='border service p-4'>
                <p className="serviceIcon"><span className="border p-2"> <FontAwesomeIcon icon={faCode}/>  </span></p>
                <h5>Responsive Web Design</h5>
                <p>I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service</p>

            </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='fade-left'>
            <div className='border service p-4'>
                <p className="serviceIcon"><span className="border p-2"> <FontAwesomeIcon icon={faCode}/>  </span></p>
                <h5>MERN STACK</h5>
                <p>I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service I am Providing Web Development Service</p>

            </div>
            </div>
           

            </div>
            </div>
        </div>
    );
};

export default Services;