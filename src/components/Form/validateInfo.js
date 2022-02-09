export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.Phone) {
      errors.Phone = 'Phone no. is required';
    } 
  
    if (!values.Branch) {
      errors.Branch = 'Branch is required';
    }
    if (!values.interest) {
        errors.interest = 'interest is required';
      }
    return errors;
  }