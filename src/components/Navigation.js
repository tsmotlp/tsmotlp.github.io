import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/publications">Publications</RouterLink>
    </nav>
  );
};

export default Navigation;