import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Colores responsive al tema con mejor contraste
  const bg = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('white', 'white'); // Blanco en ambos modos
  const subtleTextColor = useColorModeValue('gray.300', 'gray.100'); // Más claro en modo oscuro
  const borderColor = useColorModeValue('gray.700', 'gray.600');
  const hoverColor = useColorModeValue('blue.400', 'blue.200'); // Más claro en modo oscuro

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mí" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <Box as="footer" bg={bg} color={textColor}>
      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Brand & Description */}
          <VStack align="start" spacing={4}>
            <Heading as="h4" size="lg" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text" fontWeight="bold">
              DevPortfolio
            </Heading>
            <Text color={subtleTextColor} lineHeight="relaxed">
              Desarrollador Backend especializado en crear soluciones robustas 
              y escalables que impulsan el futuro digital.
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  variant="ghost"
                  color={subtleTextColor}
                  _hover={{
                    color: hoverColor,
                    bg: 'whiteAlpha.100',
                  }}
                  as="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Box>{social.icon}</Box>}
                  transition="all 0.3s"
                />
              ))}
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={4}>
            <Heading as="h6" size="md" color={textColor} fontWeight="semibold">
              Enlaces Rápidos
            </Heading>
            <VStack align="start" spacing={2}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color={subtleTextColor}
                  _hover={{ color: hoverColor }}
                  transition="colors 0.3s"
                >
                  {link.name}
                </Link>
              ))}
            </VStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4}>
            <Heading as="h6" size="md" color={textColor} fontWeight="semibold">
              Contacto
            </Heading>
            <VStack align="start" spacing={2} color={subtleTextColor}>
              <Link
                href="mailto:john.developer@email.com"
                _hover={{ color: 'blue.400' }}
                transition="colors 0.3s"
              >
                john.developer@email.com
              </Link>
              <Link
                href="tel:+15551234567"
                _hover={{ color: 'blue.400' }}
                transition="colors 0.3s"
              >
                +1 (555) 123-4567
              </Link>
              <Text>
                Ciudad de México, México
              </Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box>
          <Box h="1px" bg={borderColor} my={8} />
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color={subtleTextColor} textAlign={{ base: 'center', md: 'left' }}>
              © {currentYear} DevPortfolio. Todos los derechos reservados.
            </Text>
            <Flex align="center" gap={1} color="gray.400">
              <Text>Hecho con</Text>
              <Icon as={HeartIcon} boxSize={4} color="red.500" />
              <Text>y mucho café</Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
