import React from 'react';

export const ListingsGrid = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        maxWidth: '1800px',
      }}
    >
      {children}
    </div>
  );
};
