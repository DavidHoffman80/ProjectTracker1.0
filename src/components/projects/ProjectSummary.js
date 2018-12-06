import React from 'react';
//CSS

const ProjectSummary = ({project}) => {
  return (
    <div className='project-card'>
      <h4 className='card-title'>{project.title}</h4>
      <p>Posted by Dave</p>
      <p className='project-date'>December 2nd, 2018 at 8:55pm</p>
    </div>
  )
}

export default ProjectSummary;