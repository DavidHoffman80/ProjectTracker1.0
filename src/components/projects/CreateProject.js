import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
// CSS
import '../auth/SignIn.css';

class CreateProject extends Component {
  state = {
    ProjectTitle: '',
    ProjectContent: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
  }

  render() {
    return (
      <div className='signin-form-container'>
        <form className='signin-form' onSubmit={this.handleSubmit}>
          <h1 className='signin-form-title'>Create new project</h1>
          <div className='form-email'>
            <input type='text' id='ProjectTitle' onChange={this.handleChange} placeholder='Project Title' />
          </div>
          <div className='form-password'>
            <textarea id='ProjectContent' rows='10' onChange={this.handleChange} placeholder='Describe your project' />
          </div>
          <div className='form-btn'>
            <button className='sbtbtn'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);