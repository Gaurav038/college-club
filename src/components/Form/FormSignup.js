import React from 'react';
import validate from './validateInfo.js';
import useForm from './useForm.js';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! By filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone</label>
          <input
            className='form-input'
            type='number'
            name='Phone'
            placeholder='Enter your Phone No'
            value={values.Phone}
            onChange={handleChange}
          />
          {errors.Phone && <p>{errors.Phone}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Branch</label>
          <input
            className='form-input'
            type='text'
            name='Branch'
            placeholder='computer science 3rd year'
            value={values.Branch}
            onChange={handleChange}
          />
          {errors.Branch && <p>{errors.Branch}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>interested in</label>
          <input
            className='form-input'
            type='text'
            name='interest'
            placeholder='webdev, android'
            value={values.interest}
            onChange={handleChange}
          />
          {errors.interest && <p>{errors.interest}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        <span className='form-input-login'>
          {/* Already have an account? Login <a href='#'>here</a> */}
        </span>
      </form>
    </div>
  );
};

export default FormSignup;