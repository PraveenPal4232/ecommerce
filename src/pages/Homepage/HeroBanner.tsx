import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HeroBanner() {
  return (
    <Box
      sx={{
        height: 450,
        backgroundColor: 'primary.dark',
          }}>
      <Container maxWidth="md" sx={{
        maxWidth:"1320px !important"
          }}>
              <Box
                  sx={{
                      maxWidth: "475px",
                      padding: "115px 0",
                      color: "#ffffff"
                  }}
              >
                  <Typography variant="h3" component="h1">Best products & brands in our store</Typography>
                  <Typography component="p" sx={{
                      marginBottom:"8px"
                  }}>Trendy Products, Factory Prices, Excellent Service</Typography>
          <Button variant="contained" sx={{
            marginRight: 1,
            backgroundColor: "#ff8100",
            borderColor: "#ff8100",
                    '&:hover': {
          backgroundColor: "#d96e00",
          borderColor: "#d96e00",
        },
                  }}
                  >Contained</Button>
                  <Button variant="contained" sx={{
            backgroundColor: "#fff",
            borderColor: "#dee2e6",
            color:"#212529",
                    '&:hover': {
          backgroundColor: "#fff",
            borderColor: "#dee2e6",
            color:"#0d6efd",
        },
                  }}
                  >Outlined</Button>
              </Box>
          </Container>
    </Box>
  );
}

export default HeroBanner;
