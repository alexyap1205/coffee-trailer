import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const locations = [
  {
    name: 'Tim Neville Arboretum',
    address: 'Tim Neville Arboretum, Ferntree Gully VIC 3156',
    days: 'Every Saturday, School Holidays',
    hours: '9:00 AM - 12:00 Noon',
    image: '/arboretum.jpg', // Updated image path
  },
];

const Locations = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {locations.map((location, index) => (
        <Paper 
          key={index}
          elevation={3}
          sx={{
            p: 4,
            background: 'linear-gradient(45deg, #2d2d2d 30%, #1a1a1a 90%)',
            color: '#ffffff',
            borderRadius: 2,
            textAlign: 'center',
            border: '1px solid rgba(184, 134, 11, 0.2)',
            mb: 4,
          }}
        >
          <LocationOnIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom>
            {location.name}
          </Typography>
          <Typography variant="h5" color="primary.light" gutterBottom>
            {location.address}
          </Typography>
          <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" paragraph sx={{ mt: 2, mb: 4 }}>
            {location.days} - {location.hours}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={location.image}
            alt={location.name}
            sx={{ borderRadius: 1 }}
          />
        </Paper>
      ))}
    </Container>
  );
};

export default Locations; 