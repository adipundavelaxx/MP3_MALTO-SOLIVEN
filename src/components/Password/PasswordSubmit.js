import React from 'react';
import './PasswordForm.css';


const PasswordSubmit = () => {
  return (
    <div className='form-containers-password'>
      <img class='submit-img' src={require('../../images/airplane.png')} />
      <p className='form-submit'>password changed.</p>
      <p className='form-submit-1'> 
      You're all set. We have received your request! <br/>
      Your password has been successfully changed. <br/>
      </p>
    </div>
  );
};

export default PasswordSubmit;