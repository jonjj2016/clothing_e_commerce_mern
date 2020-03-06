import React, { useEffect } from 'react';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shopPage/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import Checkout from './pages/checkout/Checkout';
import './App.css';
import { loadUser } from './actions/authActions';
import { selectIsAuth } from './reducers/reselect/user-selector';
import { connect } from 'react-redux';
import setAuthToken from './utils/setAuthToken';

function App({ loadUser, isAuth }) {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      loadUser();
    }
  }, [loadUser]);
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route path='/shop' component={Shop} />
        {/* if user logged in we are blocking access to signin route  */}
        <Route exact path='/signin' render={() => (isAuth ? <Redirect to='/' /> : <SignInAndSignUp />)} />{' '}
      </Switch>{' '}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  isAuth: selectIsAuth(state)
});
export default connect(mapStateToProps, {
  loadUser
})(App);
