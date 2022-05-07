import React from 'react'
import validate from './ValidatePassword';
import useForm from './UsePassword';
import './PasswordForm.css';


const Password = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate,
    );
  
    return (
      <div className='form-containers2'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            forgot password.
          </h1>

          <div className='form-inputs-new'>
          <i class="fas fa-user"/>
            <input
              required
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
              required
              type='password'
              name='password'
              placeholder='Enter new password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p class='text-error'>{errors.password}</p>}
          </div>

          <div className='form-inputs-new'>
          <i class="fas fa-key"/>
            <input
              required
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p class='text-error'>{errors.password2}</p>}
          </div>

          <button className='form-input-btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  };

export default Password;