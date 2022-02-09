import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup.js';
import FormSuccess from './FormSuccess';
import img1 from "../../Images/about.gif"


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <div className='form-content-left'>
            <h1 style={{textAlign:'center'}}>
                if u are interested in this 
            </h1>
        </div> */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;