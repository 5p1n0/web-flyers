import * as React from 'react';
import Navbar from './components/navbar';
import Flyers from './components/flyers';
import Box from '@mui/material/Box'

const App = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1}}>
        <div>
          <Flyers />
        </div>
      </Box>
    </Box>
  );
}

export default App
