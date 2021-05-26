import React, { useContext } from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './FormLogin.css'
import { Link } from 'react-router-dom';
import { AddContext } from '../provider/AddContext';

const FormLogin = (props) => {
  const handler = useContext(AddContext);
  const { handleChange, values, handleSubmit, errors } = useForm(handler, validate, props);
  return (
    <div className="form-container">
      <span className="close-btn">x</span>
      <div className="form-content-left">
        <img src="img/img-2.svg" alt="spaceship" className="form-img" />
      </div>
      <div className="form-content-right">
        <form className='form-signin' onSubmit={handleSubmit}>
          <h1>Get started with us today!
            </h1>
          <div className="form-inputs">
            <label htmlFor='username' className='form-label'>
              Username
                </label>
            <input
              id='username'
              type='text'
              name='username'
              className='form-input'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>
              Password
                </label>
            <input
              id='password'
              type='password'
              name='password'
              className='form-input'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className='form-input-btn' type='sumit'>
            Log In
          </button>
          <span className="form-input-register">
            Register <Link to="/register">here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default FormLogin
