import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Pages/SingleProject.css'

const SingleProject = ({project}) => {
    const {_id, picture, name, shortDescription} = project;

    const navigate = useNavigate()
    const handleDetails  = (id) =>{
    navigate(`/projectDetails/${id}`)
    }
    return (
        <div className='col-12 col-md-6 col-lg-4'>
           <div class="card">
   <img src={picture} class="card-img-top" alt="/"/>
  <div class="card-body ">
    <h5 class="card-title project-name">{name}</h5>
    <p class="card-text projectText">{shortDescription}</p>
   <button className='detailsButton' onClick={() => handleDetails(_id) }>Details</button>
  </div>
</div>

    </div>
    );
};

export default SingleProject;