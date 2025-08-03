import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Configuración del tema personalizado
const config = {
  initialColorMode: 'system', // 'dark' | 'light' | 'system'
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  colors: {
    brand: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
});

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
          <Header />
          <Box as="main">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
