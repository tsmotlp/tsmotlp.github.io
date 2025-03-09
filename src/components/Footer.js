import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Yongqiang Huang
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © {new Date().getFullYear()} Academic Portfolio
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="mailto:yqhuang2912@gmail.com">
            Contact
          </Link>
          {' | '}
          <Link color="inherit" href="https://scholar.google.com/citations?user=VmxnkI8AAAAJ" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;