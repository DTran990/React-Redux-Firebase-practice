import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div className='container section project-details'>
        <div className='card z-depth-0'>
            <div className='card-content'>
                <span className='card-title'> Project Title </span>
                <p>Lorem    asdasdasdasdasdasdasdasdasdasdasasdsaaaaaa</p>
            </div>
            <div className='card-action gret lighten-4 grey-text'>
                <div>Posted by David Tran</div>
                <div>29 January, 3am</div>
            </div>
        </div>
    </div>
  )};

export default ProjectDetails;
