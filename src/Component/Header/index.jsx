import React from 'react';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div style={{ marginTop: '4rem', padding: '0 20px' }}>
      <Typography variant="h3" align="center" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>
        Your Ideal job awaits, start the search
      </Typography>
      <Typography variant="body1" align="center" style={{ color: 'white', fontWeight: 'bold' }}>
        Get the latest job openings that best suit you!
      </Typography>
    </div>
  );
};

export default Header;
