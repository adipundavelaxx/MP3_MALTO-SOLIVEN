import React from 'react'
import validate from './ValidateLogin';
import useForm from './UseLogin';
import { Link } from 'react-router-dom';
import './LoginForm.css';


const Login = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate,
    );
  
    return (
        <div className='form-containers'>
        <img class='logo-img' src={require('../../images/logo.png')} />
        <form onSubmit={handleSubmit} className='form' noValidate>
          <p class="login"> To keep connected with us, login with your credentials! </p>
          <div className='form-inputs-new'>
          <i class="fas fa-user"/>
            <input
              required
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p class='text-email'>{errors.email}</p>}
          </div>

          <div className='form-inputs-new'>
          <i class="fas fa-key"/>
            <input
              required
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p class='text-email'>{errors.password}</p>}
          </div>

         

          <button className='form-input-btn' type='submit'>
            Login
          </button>

          <span className='form-input-forgot'>
            <Link to='/password' >Forgot password?</Link>
          </span>
        </form>
        </div>
    );
  };

export default Login;