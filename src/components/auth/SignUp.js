import React, { Component } from 'react';
// CSS
import './SignIn.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
          <h1 className='signin-form-title'>Sign Up</h1>
          <div className='form-email'>
            <input type='email' id='email' onChange={this.handleChange} placeholder='E-mail' />
          </div>
          <div className='form-password'>
            <input type='password' id='password' onChange={this.handleChange} placeholder='Password' />
          </div>
          <div className='form-first-name'>
            <input type='text' id='firstName' onChange={this.handleChange} placeholder='First Name' />
          </div>
          <div className='form-last-name'>
            <input type='text' id='lastName' onChange={this.handleChange} placeholder='Last Name' />
          </div>
          <div className='form-btn'>
            <button className='sbtbtn'>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;