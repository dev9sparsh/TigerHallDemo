import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import PodCastSearch from './pages/PodCastSearch';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={3}>
          <VStack spacing={8}>
            <PodCastSearch />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
