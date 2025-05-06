import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Hours = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #2d2d2d 30%, #1a1a1a 90%)',
          color: '#ffffff',
          borderRadius: 2,
          border: '1px solid rgba(184, 134, 11, 0.2)',
        }}
      >
        <AccessTimeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Opening Hours
        </Typography>
        <Typography variant="h6" color="rgba(255, 255, 255, 0.8)" paragraph sx={{ mb: 4 }}>
          Catch us at Tim Neville Arboretum during these times:
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <EventAvailableIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6">Days</Typography>
        </Box>
        <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" paragraph>
          Every Saturday
          <br />
          School Holidays
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, mt: 3 }}>
          <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6">Time</Typography>
        </Box>
        <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" paragraph>
          9:00 AM - 12:00 Noon
        </Typography>

        <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 4 }}>
          * School holiday dates and exact times may vary slightly. Please check our social media for the latest updates!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Hours; 