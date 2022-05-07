import React from 'react';
import './LoginForm.css';


const Submit = () => {
  return (
    <div className='form-containers'>
      <img class='submit-img' src={require('../../images/wind.png')} />
      <p className='form-submit'>you have logged in.</p>
      <p className='form-submit-1'> 
      Awesome! You have successfully logged in. <br/>
      Feel free to post your experiences and don't  <br/>
      forget to enjoy along the way!
      </p>
    </div>
  );
};

export default Submit;