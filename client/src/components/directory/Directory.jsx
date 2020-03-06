import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../reducers/reselect/directory_selector';
import { createStructuredSelector } from 'reselect';
import './Directory.styles.scss';
const Directory = ({ sections }) => {
  const renderOutput = () => {
    return sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    });
  };

  return <div className='directory-menu'>{renderOutput()}</div>;
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);
