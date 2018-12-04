import React, { Component } from 'react';
// CSS
import './SignIn.css';

class SignIn extends Component {
  state = {

  }

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className='signin-form-container'>
        <form className='signin-form' onSubmit={this.handleSubmit}>
          <h1 className='signin-form-title'>Sign In</h1>
          <div className='form-email'>
            <input type='email' id='email' onChange={this.handleChange} placeholder='E-mail' />
          </div>
          <div className='form-password'>
            <input type='password' id='password' onChange={this.handleChange} placeholder='Password' />
          </div>
          <div className='form-btn'>
            <button className='sbtbtn'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;