import React, { Component } from 'react';
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
    console.log(this.state);
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

export default CreateProject;