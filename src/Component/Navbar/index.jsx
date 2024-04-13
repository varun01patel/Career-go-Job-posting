import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Hidden } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Go Careers.
        </Typography>
        <Hidden smDown> {/* Hide for mobile */}
          {/* Additional navigation links or icons */}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
