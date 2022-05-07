import React from 'react'
import validate from './Validate';
import useForm from './UseForm';
import { Link } from 'react-router-dom';
import './Form.css';


const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate,
    );
  
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <p className='create'>
            join us.
          </p>

          <div className='form-inputs-new'>
            <i class="fas fa-user"/>
            <input
              // className='form-input'
              type='text'
              name='firstname'
              placeholder='Enter your first name'
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p class='text-error'>{errors.firstname}</p>}
          </div>

          <div className='form-inputs-new'>
            <i class="fas fa-user"/>
            <input
              // className='form-input'
              type='text'
              name='lastname'
              placeholder='Enter your last name'
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p class='text-error'>{errors.lastname}</p>}
          </div>

          <div className='form-inputs-new'>
            <i class="fas fa-user"/>
            <input
              // className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p class='text-error'>{errors.username}</p>}
          </div>

          <div className='form-inputs-new'>
            <i class="fas fa-envelope"/>
            <input
              // className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p class='text-error'>{errors.email}</p>}
          </div>

          <div className='form-inputs-new'>
            <i class="fas fa-key"/>
            <input
              // className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p class='text-error'>{errors.password}</p>}
          </div>

          <div className='form-inputs-new'>
            <i class="fas fa-key"/>
            <input
              // className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p class='text-error'>{errors.password2}</p>}
          </div>

          <button className='form-input-btn' type='submit'>
            Sign up
          </button>

          <span className='form-input-login'>
            Already have an account? Login <Link to='/login' >here</Link>
          </span>
        </form>
      </div>
    );
  };

export default FormSignup