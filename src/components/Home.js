import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, Paper, Fade, Grow, useTheme, useMediaQuery, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CoffeeOutlined from '@mui/icons-material/CoffeeOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicOutlined from '@mui/icons-material/PublicOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const features = [
    {
      icon: <CoffeeOutlined sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Premium Organic Coffee',
      description: 'Locally sourced, freshly roasted organic beans',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Convenient Locations',
      description: 'Find our eco-friendly trailer in Boronia',
    },
    {
      icon: <PublicOutlined sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Sustainable Practices',
      description: 'Compostable cups & powered by renewable energy',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/trailer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        p: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(184,134,11,0.2) 0%, rgba(139,69,19,0.2) 100%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in={showContent} timeout={1500}>
          <Box>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                mb: 4,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': {
                      transform: 'translateY(0px)',
                    },
                    '50%': {
                      transform: 'translateY(-10px)',
                    },
                    '100%': {
                      transform: 'translateY(0px)',
                    },
                  },
                }}
              >
                <CoffeeOutlined 
                  sx={{ 
                    fontSize: 120, 
                    color: 'primary.main',
                    filter: 'drop-shadow(0 0 10px rgba(184, 134, 11, 0.5))',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                      '50%': {
                        transform: 'scale(1.05)',
                        opacity: 0.9,
                      },
                      '100%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                    },
                  }} 
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(184,134,11,0.2) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    animation: 'glow 2s ease-in-out infinite',
                    '@keyframes glow': {
                      '0%': {
                        opacity: 0.5,
                        transform: 'translate(-50%, -50%) scale(1)',
                      },
                      '50%': {
                        opacity: 0.8,
                        transform: 'translate(-50%, -50%) scale(1.2)',
                      },
                      '100%': {
                        opacity: 0.5,
                        transform: 'translate(-50%, -50%) scale(1)',
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '140%',
                  height: '140%',
                  border: '2px solid rgba(184, 134, 11, 0.3)',
                  borderRadius: '50%',
                  animation: 'rotate 10s linear infinite',
                  '@keyframes rotate': {
                    '0%': {
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) rotate(360deg)',
                    },
                  },
                }}
              />
            </Box>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 2,
                background: 'linear-gradient(45deg, #B8860B 30%, #DAA520 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              Welcome to Cubebakes Cafe
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom 
              sx={{ 
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1s ease-out 0.3s both',
              }}
            >
              Freshly brewed coffee, sustainably served on the go
            </Typography>
          </Box>
        </Fade>

        <Grow in={showContent} timeout={2000}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'rgba(45, 45, 45, 0.95)',
              color: 'text.primary',
              mb: 6,
              borderRadius: 2,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(184, 134, 11, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                border: '1px solid rgba(184, 134, 11, 0.4)',
              },
            }}
          >
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
            }}>
              We bring the perfect cup of coffee to your neighborhood with a focus on sustainability.
              Our mobile coffee trailer serves premium quality, organic coffee and specialty drinks.
              We are committed to eco-friendly practices, using compostable cups and harnessing renewable energy whenever possible.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/locations"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  boxShadow: 3,
                  background: 'linear-gradient(45deg, #B8860B 30%, #DAA520 90%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                    background: 'linear-gradient(45deg, #DAA520 30%, #B8860B 90%)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Find Us
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/menu"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(184, 134, 11, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Menu
              </Button>
            </Box>
          </Paper>
        </Grow>

        {/* Hidden Events & Announcements Box */}
        {false && (
          <Grow in={showContent} timeout={2000} style={{ transitionDelay: '300ms' }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: 'rgba(45, 45, 45, 0.95)',
                color: 'text.primary',
                mb: 6,
                mt: 2,
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(184, 134, 11, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(184, 134, 11, 0.4)',
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 2, 
                justifyContent: 'center',
              }}>
                <AccessTimeIcon 
                  sx={{ 
                    color: 'primary.main', 
                    mr: 1, 
                    fontSize: 28,
                  }} 
                />
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  Events & Announcements
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: '1.1rem',
                textAlign: 'center',
              }}>
                Exciting news! We'll be starting to serve our premium coffee at 
                <Box component="span" sx={{ 
                  fontWeight: 700, 
                  mx: 1, 
                  color: 'primary.main',
                }}>
                  St Joseph's Boronia
                </Box> 
                beginning 
                <Box component="span" sx={{ 
                  fontWeight: 700, 
                  ml: 1, 
                  color: 'primary.main',
                }}>
                  Wednesday, May 7th
                </Box>. 
                Come visit us for your morning brew!
              </Typography>
            </Paper>
          </Grow>
        )}

        <Fade in={showContent} timeout={2500}>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(45, 45, 45, 0.95)',
                    borderRadius: 2,
                    border: '1px solid rgba(184, 134, 11, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                      border: '1px solid rgba(184, 134, 11, 0.4)',
                    },
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" sx={{ 
                    mt: 2, 
                    mb: 1, 
                    fontWeight: 600,
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default Home; 