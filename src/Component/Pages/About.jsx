import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Co-Founder & CEO",
      imageUrl: "https://via.placeholder.com/150",
      bio: "John is a seasoned entrepreneur with a passion for connecting people with their dream jobs. He co-founded Go Career to revolutionize the hiring process."
    },
    {
      name: "Jane Smith",
      title: "Co-Founder & CTO",
      imageUrl: "https://via.placeholder.com/150",
      bio: "Jane is a tech visionary who leads the development of Go Career's cutting-edge platform. Her expertise in AI and machine learning powers the company's innovative job matching algorithms."
    },
    {
      name: "Michael Johnson",
      title: "Head of Partnerships",
      imageUrl: "https://via.placeholder.com/150",
      bio: "Michael is responsible for building strong relationships with employers and creating valuable partnerships that benefit job seekers. His deep industry knowledge and network are invaluable assets to the company."
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          About Go Career
        </Typography>
        <Typography variant="body1" gutterBottom>
          Go Career is a platform dedicated to helping job seekers find their dream
          careers. We believe that the right job can transform lives, so our
          mission is to connect talented individuals with exciting opportunities.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" sx={{ mt: 6 }}>
          Meet the Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box
                  component="img"
                  src={member.imageUrl}
                  alt={member.name}
                  sx={{ borderRadius: '50%', width: 150, height: 150, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  {member.title}
                </Typography>
                <Typography variant="body2">{member.bio}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;