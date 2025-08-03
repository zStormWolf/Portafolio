import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const { isOpen, onToggle } = useDisclosure();
  
  // Colores responsive al tema con mejor contraste
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.100'); // Más claro en modo oscuro
  const hoverTextColor = useColorModeValue('blue.600', 'blue.200'); // Más claro en modo oscuro
  const scrolledBg = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(26, 32, 44, 0.95)');

  const navItems = ["Inicio", "Sobre Mí", "Proyectos", "Habilidades", "Contacto"];

  const NavLink = ({ children, href, onClick }) => (
    <Text
      as="a"
      href={href}
      fontSize="md"
      fontWeight="medium"
      color={textColor}
      _hover={{
        color: hoverTextColor,
        textDecoration: 'none',
      }}
      transition="all 0.3s"
      onClick={onClick}
    >
      {children}
    </Text>
  );

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={scrolled ? scrolledBg : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      boxShadow={scrolled ? 'lg' : 'none'}
      transition="all 0.3s"
      px={{ base: 4, lg: 8 }}
      py={{ base: 2, lg: 4 }}
    >
      <Flex align="center" justify="space-between" maxW="7xl" mx="auto">
        <Text
          as="a"
          href="#"
          fontSize="xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.600, purple.600)"
          bgClip="text"
          cursor="pointer"
        >
          DevPortfolio
        </Text>

        <Flex align="center" gap={4}>
          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}>
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </NavLink>
            ))}
          </HStack>

          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Desktop CTA Button */}
          <Button
            size="sm"
            bgGradient="linear(to-r, blue.600, purple.600)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, blue.700, purple.700)',
            }}
            display={{ base: 'none', lg: 'inline-flex' }}
          >
            Descargar CV
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle Navigation"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            display={{ base: 'flex', lg: 'none' }}
          />
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Box display={isOpen ? { base: 'block', lg: 'none' } : 'none'}>
        <VStack
          spacing={4}
          align="stretch"
          bg={bg}
          borderTop="1px"
          borderColor={borderColor}
          px={4}
          py={4}
        >
          {navItems.map((item) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={onToggle}
            >
              {item}
            </NavLink>
          ))}
          
          {/* Theme Toggle para móvil */}
          <Box py={2}>
            <ThemeToggle />
          </Box>
          <Button
            size="sm"
            bgGradient="linear(to-r, blue.600, purple.600)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, blue.700, purple.700)',
            }}
            w="full"
          >
            Descargar CV
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
