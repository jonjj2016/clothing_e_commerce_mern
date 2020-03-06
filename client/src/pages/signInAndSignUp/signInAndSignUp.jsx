import React, { useEffect } from 'react';
import './signInAndSignUp.scss';
import { connect } from 'react-redux';

import Signin from '../../components/signin/signin';
import Signup from '../../components/signUp/SignUp';
const SignInAndSignUp = ({ isAuth, history }) => {
  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth, history]);
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <Signup />
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.logs.isAuthenticated
});
export default connect(mapStateToProps)(SignInAndSignUp);
