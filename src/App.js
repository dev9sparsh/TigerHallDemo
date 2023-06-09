import React from 'react';
import { ChakraProvider, Box, VStack, Grid, extendTheme, ColorModeScript } from '@chakra-ui/react';
import PodCastSearch from './pages/PodCastSearch';
import FontStyle from './FontStyle';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  colors: {
    Main: {
      600: '#ff5900'
    },

    Secondary: {
      Sunny600: '#F78104',
      Yellow600: '#FAAB36',
      Teal600: '#005F60',
      Grey200: '#F5F3EE',
      Black: '#000000',
      White: '#FFFFFF'
    },

    TigerOrange: {
      200: '#FFCCA3',
      400: 'FFA97A'
    },
    grey: {
      600: '#A3A099',
      700: '#797670'
    },
    KindaYellow: {
      300: '#FCDEB0',
      500: '#FABD5E',
      700: '#D4902B'
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <FontStyle />
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
