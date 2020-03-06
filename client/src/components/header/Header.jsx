import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { withRouter } from 'react-router-dom';
import { logOutUser } from '../../actions/authActions';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropDown/cartDropdown';
import { cartDropdownToggler } from '../../actions/cart_actions';
//importing selectors for memoaization
import { selectCartHidden } from '../../reducers/reselect/cart-selector';
import { selectIsAuth } from '../../reducers/reselect/user-selector';
//importing structured selector to organize our selectors
import { createStructuredSelector } from 'reselect';
import './header.scss';
const Header = ({ history, isAuth, logOutUser, hidden, cartDropdownToggler }) => {
  const onClick = () => {
    history.push('/signin');
    logOutUser();
  };

  //CONDITIONALLY RENDERING OUR HEDER COMPONENT SO IF USER LOGGED IN HE WILL HAVE ogout OTHERVIZE login
  let content = () => {
    if (isAuth) {
      return (
        <React.Fragment>
          <Link className='option' to='/shop'>
            Shop
          </Link>
          <Link className='option' to='/contact'>
            Contact
          </Link>
          <Link className='option' onClick={onClick} to='/signin'>
            Sign Out
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link className='option' to='/shop'>
            Shop
          </Link>
          <Link className='option' to='/contact'>
            Contact
          </Link>
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        </React.Fragment>
      );
    }
  };
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        {content()}
        <CartIcon onClick={cartDropdownToggler} />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};
//old way
// const mapStateToProps = state => ({ isAuth: selectIsAuth(state), hidden: selectCartHidden(state) });
//new way with reselect
const mapStateToProps = createStructuredSelector({ isAuth: selectIsAuth, hidden: selectCartHidden });

export default connect(mapStateToProps, { logOutUser, cartDropdownToggler })(withRouter(Header));
