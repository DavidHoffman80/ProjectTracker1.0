import React, { Component } from 'react';
// CSS
import './Dashboard.css'
// COMPONENTS
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <ProjectList />
        <Notifications />
      </div>
    )
  }
}

export default Dashboard;