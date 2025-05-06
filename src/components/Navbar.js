import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CoffeeOutlined from '@mui/icons-material/CoffeeOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Locations', path: '/locations' },
    { title: 'Menu', path: '/menu' },
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem button component={RouterLink} to={link.path} key={link.title}>
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                color="inherit"
                component={RouterLink}
                to={link.path}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(184, 134, 11, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 