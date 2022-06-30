import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.punkapi.com/v2/beers?page=1&per_page=15`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl'>
        <Box sx={{ height: '100vh' }}></Box>
      </Container>
    </div>
  );
};

export default App;
