import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or would like to learn more about our
          services, please don't hesitate to reach out to us.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Email
            </Typography>
            <Link
              href="mailto:info@gocareer.com"
              color="inherit"
              underline="hover"
              sx={{ typography: 'body1' }}
            >
              info@gocareer.com
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Phone
            </Typography>
            <Typography variant="body1">123-456-7890</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;