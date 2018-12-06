import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import './Dashboard.css'
// COMPONENTS
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className='dashboard'>
        <ProjectList projects={projects} />
        <Notifications />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);