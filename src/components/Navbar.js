import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CoffeeOutlined from '@mui/icons-material/CoffeeOutlined';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static" 
      sx={{ 
        background: 'linear-gradient(45deg, #2d2d2d 30%, #1a1a1a 90%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <CoffeeOutlined 
            sx={{ 
              mr: 2,
              fontSize: 32,
              color: 'primary.main',
              filter: 'drop-shadow(0 0 5px rgba(184, 134, 11, 0.5))',
            }} 
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #B8860B 30%, #DAA520 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Cubebakes Cafe
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/locations"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Locations
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/menu"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Menu
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 