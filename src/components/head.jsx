import React from 'react';

export default function Head({ classname }) {
  return (
    <header style={{ background: '#000000', padding: '16px' }}>
      <h5 style={{ color: 'white', margin: 0 }}>{classname}</h5>
    </header>
  );
}
