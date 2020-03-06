import React from 'react';
import './collection_item.scss';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart_actions';
const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;
  const onClick = () => {
    addToCart(item);
  };
  return (
    <div className='collection-item '>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={onClick}>Add to Cart</CustomButton>
    </div>
  );
};

export default connect(null, { addToCart })(CollectionItem);
