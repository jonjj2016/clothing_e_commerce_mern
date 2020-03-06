import React from 'react';
import './Collection.scss';
import CollectionItem from '../../components/collection_item/collection_item';
import { selectCollection } from '../../reducers/reselect/shopCart_selector';
import { connect } from 'react-redux';

const Collection = ({ match, collection }) => {
  return (
    <div className='collection-page'>
      <h1 className='title'>{collection.title}</h1>
      <div className='items'>
        {collection.items.map(item => (
          <div key={item.id} className='collection-item'>
            <CollectionItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  // console.log(selectCollection(ownProps.match.params.categoryId)(state));
  return { collection: selectCollection(ownProps.match.params.categoryId)(state) };
};
export default connect(mapStateToProps)(Collection);
