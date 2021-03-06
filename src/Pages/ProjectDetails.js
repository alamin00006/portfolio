import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Pages/ProjectDetails.css'

const ProjectDetails = () => {
    const {productId} = useParams();

    const [oneProjects, setProjects] = useState({});
   
    
    useEffect( () =>{
        const url = `https://powerful-forest-46766.herokuapp.com/projects/${productId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setProjects(data))
       
    }, [])


    return (
        <div className='container'>
            <h1 className='project-name text-center'>{oneProjects.name}
            </h1>
             <div className='container row'>
                 <div className='col-12 col-md-6 col-lg-4'>
                 <img className='images' src={oneProjects.picture} alt="" />
               
               
                 </div>

                 <div className='col-12 col-md-6 col-lg-4'>
                 <img className='images' src={oneProjects.picture1} alt="" />
                 </div>
                 <div className='col-12 col-md-6 col-lg-4'>
                 <img className='images' src={oneProjects.picture2} alt="" />
                 </div>
             </div>
             <h4 className='text-center my-3 fs-2'>Project Description
             <span className='p-5 github'><a target='_blank' href="https://github.com/alamin00006">GitHub</a></span>
             
             </h4>
        
             <div className='descripton'>
             <p className='w-100'>
                 <h3 className='project-title'>{oneProjects.shortDescription}</h3>
                 {oneProjects.description}</p>
                 <p className='my-5 technology w-100'>{oneProjects.technology}</p>
                 <p>
              <div className='row '>
              <a className='col-12 col-md-6 col-lg-4' target='_blank' href={oneProjects.liveSite}>Live Site</a>
                 <a className='col-12 col-md-6 col-lg-4' target='_blank' href={oneProjects.ClientSite}>Client Site</a>
                 <a className='col-12 col-md-6 col-lg-4' target='_blank' href={oneProjects.ServerSite}>Server Site</a>
              </div>

                 </p>
             </div>
        </div>
    );
};

export default ProjectDetails;