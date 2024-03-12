import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div style={{height: '100vh'}}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p><Link to="/">Go Home</Link></p>
    </div>
  );
};
