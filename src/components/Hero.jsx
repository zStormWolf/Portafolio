import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Image,
  Icon,
  Card,
  CardBody,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon,
  ChevronDownIcon 
} from "@heroicons/react/24/outline";

const Hero = () => {
  // Colores responsive al tema con mejor contraste
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, blue.50)',
    'linear(to-br, gray.900, gray.800)'
  );
  const textColor = useColorModeValue('gray.600', 'gray.100'); // Más claro en modo oscuro
  const headingColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');
  const decorativeColor = useColorModeValue('blue.100', 'gray.700');
  const iconBg = useColorModeValue('white', 'gray.700');
  const iconTextColor = useColorModeValue('gray.600', 'white');
  const profileCardBg = useColorModeValue('whiteAlpha.800', 'gray.800');
  const profileTextColor = useColorModeValue('gray.600', 'gray.100');
  const profileHeadingColor = useColorModeValue('gray.800', 'white');
  const profileAccentColor = useColorModeValue('blue.600', 'blue.200');
  const techIconColor = useColorModeValue('blue.600', 'blue.300');

  const techIcons = [
    { icon: CodeBracketIcon, name: "Backend Development" },
    { icon: ServerIcon, name: "API Design" },
    { icon: CircleStackIcon, name: "Database Management" }
  ];

  return (
    <Box
      as="section"
      id="inicio"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box position="absolute" inset={0} overflow="hidden">
        <Box
          position="absolute"
          top="-40"
          right="-40"
          w="80"
          h="80"
          bg={decorativeColor}
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.7}
          className="animate-blob"
        />
        <Box
          position="absolute"
          bottom="-40"
          left="-40"
          w="80"
          h="80"
          bg={decorativeColor}
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.7}
          className="animate-blob animation-delay-2000"
        />
        <Box
          position="absolute"
          top="40"
          left="40"
          w="80"
          h="80"
          bg={decorativeColor}
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.7}
          className="animate-blob animation-delay-4000"
        />
      </Box>

      <Container maxW="7xl" py={16} position="relative" zIndex={10}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          {/* Left Column - Text Content */}
          <VStack
            spacing={6}
            align={{ base: 'center', lg: 'start' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={useColorModeValue('blue.600', 'blue.300')}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Desarrollador Backend
            </Text>
            
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color={headingColor}
              lineHeight="tight"
            >
              Construyendo el{" "}
              <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">
                futuro digital
              </Text>{" "}
              desde el servidor
            </Heading>
            
            <Text
              fontSize="lg"
              color={textColor}
              lineHeight="relaxed"
              maxW={{ base: 'full', lg: '2xl' }}
            >
              Especializado en crear arquitecturas robustas, APIs escalables y soluciones backend 
              de alto rendimiento que impulsan aplicaciones modernas.
            </Text>

            <VStack spacing={4} w="full">
              <HStack spacing={4} justify={{ base: 'center', lg: 'start' }} flexWrap="wrap">
                <Button
                  size="lg"
                  bgGradient="linear(to-r, blue.600, purple.600)"
                  color="white"
                  _hover={{
                    bgGradient: 'linear(to-r, blue.700, purple.700)',
                    shadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  Ver Proyectos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  colorScheme="blue"
                  _hover={{
                    bg: 'blue.50',
                  }}
                  transition="all 0.3s"
                >
                  Contactar
                </Button>
              </HStack>

              {/* Tech Icons */}
              <HStack spacing={6} justify={{ base: 'center', lg: 'start' }} pt={4}>
                {techIcons.map((tech, index) => (
                  <VStack key={index} spacing={2}>
                    <Box
                      p={3}
                      bg={iconBg}
                      borderRadius="lg"
                      shadow="md"
                      transition="all 0.3s"
                      _hover={{
                        shadow: 'lg',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      <Icon as={tech.icon} boxSize={6} color={techIconColor} />
                    </Box>
                    <Text fontSize="xs" color={iconTextColor} textAlign="center" fontWeight="medium">
                      {tech.name}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
          </VStack>

          {/* Right Column - Profile Card */}
          <Flex justify={{ base: 'center', lg: 'end' }}>
            <Card
              maxW="md"
              w="full"
              bg={profileCardBg}
              backdropFilter="blur(10px)"
              shadow="xl"
              borderRadius="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-8px)',
                shadow: '2xl',
              }}
            >
              <CardBody p={8} textAlign="center">
                <Box
                  w={32}
                  h={32}
                  mx="auto"
                  mb={6}
                  bgGradient="linear(to-br, blue.600, purple.600)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading as="h2" size="xl" color="white" fontWeight="bold">
                    JD
                  </Heading>
                </Box>
                
                <Heading as="h3" size="lg" color={profileHeadingColor} mb={2}>
                  John Developer
                </Heading>
                
                <Text fontSize="sm" color={profileAccentColor} fontWeight="medium" mb={4}>
                  Senior Backend Developer
                </Text>
                
                <Text color={profileTextColor} mb={6}>
                  +5 años de experiencia creando soluciones backend escalables 
                  con tecnologías modernas.
                </Text>

                <HStack justify="center" spacing={6}>
                  <VStack spacing={1}>
                    <Heading as="h4" size="md" color={profileAccentColor} fontWeight="bold">
                      50+
                    </Heading>
                    <Text fontSize="xs" color={profileTextColor}>
                      Proyectos
                    </Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Heading as="h4" size="md" color={profileAccentColor} fontWeight="bold">
                      15+
                    </Heading>
                    <Text fontSize="xs" color={profileTextColor}>
                      Tecnologías
                    </Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Heading as="h4" size="md" color="blue.600" fontWeight="bold">
                      99%
                    </Heading>
                    <Text fontSize="xs" color="gray.600">
                      Satisfacción
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          </Flex>
        </SimpleGrid>

        {/* Scroll indicator */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          className="animate-bounce"
        >
          <Icon as={ChevronDownIcon} boxSize={6} color="blue.600" />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
