import React from 'react';
// CSS
import './ProjectList.css';
// COMPONENTS
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className='projects-list'>
      <h3>Projects</h3>
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList;