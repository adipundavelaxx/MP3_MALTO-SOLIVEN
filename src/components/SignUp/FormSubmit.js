import React from 'react';
import './Form.css';


const FormSubmit = () => {
  return (
    <div className='form-container-3'>
      <img class='submit-img' src={require('../../images/airplane.png')} />
      <p className='form-submit'>thank you for registering.</p>
      <p className='form-submit-1'> 
      You're all set. We have received your request! <br/>
      Kindly proceed to the login page to discover <b> unbound.</b><br/>
      Looking forward to seeing you around! <br/>
      </p>
    </div>
  );
};

export default FormSubmit;