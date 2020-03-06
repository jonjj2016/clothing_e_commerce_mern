import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.styles.scss';
import { withRouter } from 'react-router-dom';
const MenuItem = ({ title, text, imageUrl, size, linkUrl, history, match }) => {
  const changeDirectory = () => {
    //putting routs dinamicly
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className={`${size} menu-item`} onClick={changeDirectory}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{text}</span>
      </div>
    </div>
  );
};
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};
MenuItem.defaultProps = {
  text: 'SHOP NOW'
};
export default withRouter(MenuItem);
