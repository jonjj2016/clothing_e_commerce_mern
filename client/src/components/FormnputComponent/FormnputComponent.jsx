import React from 'react';
import './FormnputComponent.scss';
const FormnputComponent = ({ onChangeHandle, label, ...other }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={onChangeHandle} {...other} />
      {label && (
        <label
          className={`${other.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={label.toLowerCase()}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormnputComponent;
