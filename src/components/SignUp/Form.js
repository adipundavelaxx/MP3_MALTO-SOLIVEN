import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSubmit from './FormSubmit';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSubmit />
        )}
      </div>
    </>
  );
};

export default Form;