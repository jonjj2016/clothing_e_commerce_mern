import React from 'react';
import './shop_data.scss';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Category from '../collection/Collection';
// import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
// import { selectShopCartData } from '../../reducers/reselect/shopCart_selector';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
const Shop = ({ match }) => {
  console.log(match.path);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default Shop;
