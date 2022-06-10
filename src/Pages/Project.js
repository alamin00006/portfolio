import React, { useEffect, useState } from 'react';
import '../Pages/Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import SingleProject from './SingleProject';

const Project = () => {
  const [projects, setProjects] = useState([])
  useEffect( () =>{
      fetch('https://powerful-forest-46766.herokuapp.com/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

    useEffect( () =>{
        AOS.init({duration:2000})
    }, [])

    return (
        <div className='projects'>
            <div className='projectText pt-5'>
                <h3> MY<span id='projects'>PROJECTS</span></h3>
                <hr />
            </div>
            <div className='container text-center mt-5'>
            <div className=''> 
            <div className='row'>
            {
                projects.map(project =><SingleProject
                key={project._id}
                project={project}
                ></SingleProject>)
            }
           
            </div>
    
            </div>
            </div>
        </div>
    );
};

export default Project;