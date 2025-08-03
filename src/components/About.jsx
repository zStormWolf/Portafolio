import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  Progress,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

const About = () => {
  const skills = [
    { name: "Node.js", level: 95 },
    { name: "Python", level: 90 },
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "Docker", level: 82 },
    { name: "AWS", level: 80 },
  ];

  const highlights = [
    {
      icon: BriefcaseIcon,
      title: "5+ Años de Experiencia",
      description: "Desarrollando soluciones backend robustas y escalables"
    },
    {
      icon: TrophyIcon,
      title: "50+ Proyectos Completados",
      description: "Desde startups hasta empresas Fortune 500"
    },
    {
      icon: AcademicCapIcon,
      title: "Certificaciones",
      description: "AWS Certified, MongoDB Professional, Docker Expert"
    },
    {
      icon: HeartIcon,
      title: "Pasión por el Código",
      description: "Siempre aprendiendo nuevas tecnologías y mejores prácticas"
    }
  ];

  // Colores responsive al tema con mejor contraste
  const bg = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.100'); // Más claro en modo oscuro
  const skillTextColor = useColorModeValue('gray.700', 'white'); // Blanco en modo oscuro
  const accentColor = useColorModeValue('blue.600', 'blue.200'); // Más claro en modo oscuro
  const highlightIconBg = useColorModeValue('blue.50', 'gray.700');
  const highlightIconColor = useColorModeValue('blue.600', 'blue.300');
  const personalCardBg = useColorModeValue('linear(to-br, blue.50, purple.50)', 'linear(to-br, gray.800, gray.700)');

  return (
    <Box as="section" id="sobre-mí" bg={bg} py={{ base: 16, lg: 24 }} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="7xl">
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={accentColor}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Conoce al Desarrollador
            </Text>
            <Heading as="h2" size="2xl" color={headingColor}>
              Sobre <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">Mí</Text>
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="3xl"
              textAlign="center"
              lineHeight="relaxed"
            >
              Soy un desarrollador backend apasionado por crear soluciones tecnológicas 
              que resuelven problemas reales y mejoran la vida de las personas.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start" w="full">
            {/* Left Column - Story & Skills */}
            <VStack spacing={6}>
              {/* Story Card */}
              <Card
                bg={cardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8}>
                  <Heading as="h3" size="lg" color={headingColor} mb={4}>
                    Mi Historia
                  </Heading>
                  <VStack spacing={4} align="stretch">
                    <Text color={textColor} lineHeight="relaxed">
                      Comencé mi viaje en el desarrollo hace más de 5 años, cuando descubrí 
                      mi pasión por resolver problemas complejos a través del código. 
                      Desde entonces, he trabajado en una amplia variedad de proyectos, 
                      desde aplicaciones web simples hasta sistemas distribuidos de gran escala.
                    </Text>
                    <Text color={textColor} lineHeight="relaxed">
                      Mi enfoque se centra en escribir código limpio, mantenible y eficiente, 
                      siempre siguiendo las mejores prácticas de la industria. Me especializo 
                      en arquitecturas de microservicios, APIs RESTful y GraphQL, y tengo 
                      experiencia extensa con bases de datos tanto relacionales como NoSQL.
                    </Text>
                    <Text color={textColor} lineHeight="relaxed">
                      Cuando no estoy programando, disfruto contribuir a proyectos de código 
                      abierto, escribir artículos técnicos y mentorear a desarrolladores junior.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              {/* Skills Card */}
              <Card
                bg={cardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8}>
                  <Heading as="h3" size="lg" color={headingColor} mb={6}>
                    Habilidades Técnicas
                  </Heading>
                  <VStack spacing={4}>
                    {skills.map((skill, index) => (
                      <Box key={index} w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontSize="sm" fontWeight="medium" color={skillTextColor}>
                            {skill.name}
                          </Text>
                          <Text fontSize="sm" color={accentColor} fontWeight="medium">
                            {skill.level}%
                          </Text>
                        </Flex>
                        <Progress 
                          value={skill.level} 
                          colorScheme="blue"
                          size="sm"
                          borderRadius="md"
                        />
                      </Box>
                    ))}
                  </VStack>
                </CardBody>
              </Card>
            </VStack>

            {/* Right Column - Highlights */}
            <VStack spacing={6}>
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  shadow="md"
                  borderRadius="lg"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                  w="full"
                >
                  <CardBody p={6}>
                    <Flex align="start" gap={4}>
                      <Box p={3} bg={highlightIconBg} borderRadius="lg">
                        <Icon as={highlight.icon} boxSize={6} color={highlightIconColor} />
                      </Box>
                      <Box>
                        <Heading as="h4" size="md" color={headingColor} mb={2}>
                          {highlight.title}
                        </Heading>
                        <Text color={textColor}>
                          {highlight.description}
                        </Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              ))}

              {/* Personal Touch */}
              <Card
                bgGradient={personalCardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8} textAlign="center">
                  <Heading as="h4" size="lg" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text" mb={4}>
                    ¿Por qué Backend?
                  </Heading>
                  <Text color={textColor} lineHeight="relaxed">
                    Me fascina la arquitectura de sistemas y la lógica que impulsa 
                    las aplicaciones. Crear APIs elegantes, optimizar bases de datos 
                    y diseñar sistemas escalables es lo que me motiva cada día.
                  </Text>
                </CardBody>
              </Card>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
