import React, { useEffect } from 'react';
import '../Pages/Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import machin from '../images/machinpart.png'
import doctor from '../images/2022-06-09 23_56_28-Window.png'
import computer from '../images/computerstore.png'

const Project = () => {
    useEffect( () =>{
        AOS.init({duration:2000})
    }, [])
    return (
        <div className='projects'>
            <div className='projectText pt-5'>
                <h3>MY <span>PROJECTS</span></h3>
                <hr />
            </div>
            <div className='container text-center mt-5'>
            <div className='row'> 
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='fade-right'>
            <div className='card text-dark'>
             <img src={machin } alt="" />
             <div className='card-body'>
            <h5 className='card-title'> Machin Repair Parts</h5>
                <p>This is Machin Repairs Part Website</p>
                <a href="https://my-computer-store-9e4ae.web.app/" className='btn details-button'>MORE DETAIL</a>
            </div>
            </div>
           
            </div>
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='zoom-in'>
            <div className='card text-dark'>
             <img src={doctor } alt="" />
             <div className='card-body'>
            <h5 className='card-title'> Machin Repair Parts</h5>
                <p>This is Machin Repairs Part Website</p>
                <a href="https://machine-parts.web.app/" className='btn details-button'>MORE DETAIL</a>
            </div>
            </div>
           
            </div>
            
            <div className='col-12 col-md-6 col-lg-4 p-3' data-aos='fade-left'>
            <div className='card text-dark'>
             <img src={computer} alt="" />
             <div className='card-body'>
            <h5 className='card-title'> Machin Repair Parts</h5>
                <p>This is Machin Repairs Part Website</p>
                <a href="https://physical-medicine-specialist.web.app/" className='btn details-button'>MORE DETAIL</a>
            </div>
            </div>
           
            </div>
            
           

            </div>
            </div>
        </div>
    );
};

export default Project;