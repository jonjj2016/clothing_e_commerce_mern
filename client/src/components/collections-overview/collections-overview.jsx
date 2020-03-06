import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import './collections-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPreview } from '../../reducers/reselect/shopCart_selector';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);

  return (
    <div className='collections-overview'>
      {/* {Object.keys(collections).map(item => {
        return <CollectionPreview key={collections[item].id} {...collections[item]} />;
      })} */}
      {collections.map(item => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
