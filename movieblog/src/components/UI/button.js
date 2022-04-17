import React from 'react';

const Button = ({className, onClick}) => {
  return <div className={className} onClick={onClick}>
      <span>Daha Fazla</span>
  </div>;
}

export default Button;