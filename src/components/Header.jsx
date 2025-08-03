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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

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
  const bg = 'white';
  const borderColor = 'gray.200';

  const navItems = ["Inicio", "Sobre Mí", "Proyectos", "Habilidades", "Contacto"];

  const NavLink = ({ children, href }) => (
    <Text
      as="a"
      href={href}
      fontSize="md"
      fontWeight="medium"
      color="gray.600"
      _hover={{
        color: 'blue.600',
        textDecoration: 'none',
      }}
      transition="all 0.3s"
    >
      {children}
    </Text>
  );

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      bg={scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'}
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
          className="gradient-text"
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
