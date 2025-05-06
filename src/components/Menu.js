import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Divider } from '@mui/material';
import CoffeeOutlined from '@mui/icons-material/CoffeeOutlined';

const menuItems = {
  drinks: [
    { name: 'Regular', price: '$5.00' },
    { name: 'Large', price: '$6.00' },
    { name: 'Iced', price: '$6.50' },
  ],
  snacks: [
    { name: 'Muffin', price: '$5.00' },
    { name: 'Walnuts and Date Bar', price: '$2.90' },
  ],
};

const Menu = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <CoffeeOutlined sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Our Menu
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Freshly brewed coffee and delicious snacks
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {Object.entries(menuItems).map(([category, items]) => (
          <Grid item xs={12} key={category}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom sx={{ textTransform: 'capitalize' }}>
                  {category}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  {items.map((item) => (
                    <Grid item xs={12} sm={6} key={item.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body1" color="primary">
                          {item.price}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          * All prices are subject to change. Seasonal specials available.
        </Typography>
      </Box>
    </Container>
  );
};

export default Menu; 