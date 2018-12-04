import React from 'react';
// CSS
import './ProjectList.css';
// COMPONENTS
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className='projects-list'>
      <h3>Projects</h3>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  )
}

export default ProjectList;