import React from 'react';
import './Form.css';
import img2 from "../../Images/about1.gif"


const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={img2} alt='success-image' />
    </div>
  );
};

export default FormSuccess;