import React from 'react';
import ProtoTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: '10px',
};

Button.prototype = {
  width: ProtoTypes.number.isRequired,
  margin: ProtoTypes.string,
};

export default Button;
