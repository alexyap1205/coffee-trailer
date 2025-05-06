import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Locations from './components/Locations';
import Menu from './components/Menu';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B8860B', // Dark goldenrod
      light: '#DAA520', // Goldenrod
      dark: '#8B4513', // Saddle brown
    },
    secondary: {
      main: '#D2B48C', // Tan
      light: '#F5DEB3', // Wheat
      dark: '#8B7355', // Dark tan
    },
    background: {
      default: '#1A1A1A', // Very dark gray
      paper: '#2D2D2D', // Dark gray
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
