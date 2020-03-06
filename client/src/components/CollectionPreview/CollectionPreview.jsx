import React from 'react';
import './CollectionPreview.scss';
import PropTypes from 'prop-types';
import CollectionItem from '../collection_item/collection_item';
const PreviewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
PreviewCollection.defaultProps = {
  title: 'title',
  items: []
};
PreviewCollection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
export default PreviewCollection;
