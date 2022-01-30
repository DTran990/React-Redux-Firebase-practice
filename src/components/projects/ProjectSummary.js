import React from 'react';

const ProjectSummary = ({project}) => {
  return (
        <div className='card z-depth-0 project-summary'>
            <div className='class-content grey-text text-darken-3'>
                <span className='card-title'>{project.title}</span>
                <p>Posted by David Tran</p>
                <p className='grey-text'>29 January 3am</p>
            </div>
        </div>
    )};

export default ProjectSummary;