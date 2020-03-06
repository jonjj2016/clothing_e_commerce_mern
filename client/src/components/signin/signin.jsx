import React, { useState } from 'react';
import './signin.scss';
import FormnputComponent from '../FormnputComponent/FormnputComponent';
import CustomButton from '../customButton/CustomButton';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
const Signin = ({ loginUser }) => {
  //setting local state for inputs email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = e => {
    // console.log(e.target.children.email.value);
    e.preventDefault();
    const loginData = {
      email,
      password
    };
    loginUser(loginData);

    setPassword('');
    setEmail('');
  };
  const onChange = e => {
    const { value, name } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <div className='sign-in'>
      <h2 className='title'>Ia Already have an acount</h2>
      <span>Sign in with your email an password</span>
      <form onSubmit={onSubmit}>
        <FormnputComponent type='email' name='email' id='email' onChangeHandle={onChange} value={email} label='Email' required />
        {/* <label htmlFor='email'>Email</label> */}
        <FormnputComponent type='password' name='password' id='password' onChangeHandle={onChange} value={password} label='Password' required />
        {/* <label htmlFor='password'>password</label> */}
        <CustomButton type='submit'>sign in</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { loginUser })(Signin);
