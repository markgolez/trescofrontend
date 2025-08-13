import React from 'react';

const Loader: React.FC<{size?: number}> = ({size = 16}) => (
  <span
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      border: '2px solid #fff',
      borderTop: '2px solid #007bff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }}
  />
);

export default Loader; 