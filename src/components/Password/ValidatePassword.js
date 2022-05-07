export default function ValidatePassword(values) {
    let errors = {};

    
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password should be 8 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is Required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }