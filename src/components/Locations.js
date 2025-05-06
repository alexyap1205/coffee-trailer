import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const locations = [
  {
    name: 'Downtown Square',
    address: '123 Main Street, City Center',
    days: 'Monday - Friday',
    hours: '7:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'University Campus',
    address: '456 College Avenue, Near Student Union',
    days: 'Monday - Friday',
    hours: '7:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'Weekend Market',
    address: '789 Market Street, Farmers Market',
    days: 'Saturday - Sunday',
    hours: '8:00 AM - 4:00 PM (Sat), 8:00 AM - 2:00 PM (Sun)',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
];

const Locations = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          background: 'linear-gradient(45deg, #2d2d2d 30%, #1a1a1a 90%)',
          color: '#ffffff',
          borderRadius: 2,
          textAlign: 'center',
          border: '1px solid rgba(184, 134, 11, 0.2)',
        }}
      >
        <LocationOnIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Our Regular Spot
        </Typography>
        <Typography variant="h5" color="primary.light" gutterBottom>
          Tim Neville Arboretum
        </Typography>
        <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" paragraph sx={{ mt: 2, mb: 4 }}>
          Find our eco-friendly coffee trailer serving premium organic coffee and treats at our regular spot!
        </Typography>

        {/* Combined Hours Information */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {/* Days Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <EventAvailableIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Days</Typography>
            </Box>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
              Every Saturday
            </Typography>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
              School Holidays
            </Typography>
          </Grid>
          
          {/* Time Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Time</Typography>
            </Box>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
              9:00 AM - 12:00 Noon
            </Typography>
          </Grid>
        </Grid>

        {/* Address and Map Placeholder/Notes Section */}
        <Box sx={{ mt: 5 }}>
          {/* Optional: Add a map embed here */}
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 2 }}>
            Location: Tim Neville Arboretum, Ferntree Gully VIC 3156 (Specific spot within the park may vary)
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 1 }}>
            * School holiday dates and exact times may vary slightly. Follow us on social media for the latest updates!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Locations; 