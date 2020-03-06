import React, { useState } from 'react';
import FormnputComponent from '../FormnputComponent/FormnputComponent';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import './SignUp.scss';
const SignUp = ({ registerUser }) => {
  //setting local state for inputs email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm_password, setconfirmPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (password === confirm_password) {
      registerUser({
        email,
        password,
        name
      });
    } else {
      return alert('not correct password');
    }
    setEmail('');
    setPassword('');
    setName('');
    setconfirmPassword('');
    console.log("'confirmed");
  };
  const onChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'name':
        return setName(value);
      case 'password':
        return setPassword(value);
      case 'confirm_password':
        return setconfirmPassword(value);

      default:
        return;
    }
  };
  return (
    <div className='sign-up'>
      <h2 className='title'>Ia Already have an acount</h2>
      <span>Sign in with your email an password</span>
      <form onSubmit={onSubmit}>
        {/* Name field */}
        <FormnputComponent type='name' name='name' id='name' onChangeHandle={onChange} value={name} label='Name' required />
        {/* Email field */}

        <FormnputComponent type='email' name='email' id='email' onChangeHandle={onChange} value={email} label='Email' required />
        {/* Password field */}

        <FormnputComponent type='password' name='password' id='password' onChangeHandle={onChange} value={password} label='Password' required />
        {/* Confirm Password  field */}

        <FormnputComponent type='password' name='confirm_password' id='confirm_password' onChangeHandle={onChange} value={confirm_password} label='Confirm Password' required />
        <CustomButton type='submit'>sign up</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { registerUser })(SignUp);
