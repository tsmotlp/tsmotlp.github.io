import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

const Research = () => {
  const researchAreas = [
    {
      title: "Research Area 1",
      description: "Description of your first research area and its significance."
    },
    {
      title: "Research Area 2",
      description: "Description of your second research area and its impact."
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Research Interests
      </Typography>
      <Grid container spacing={3}>
        {researchAreas.map((area, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {area.title}
              </Typography>
              <Typography variant="body1">
                {area.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Research;