import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Badge,
  SimpleGrid,
  VStack,
  HStack,

  Card,
  CardBody,
  CardFooter,
  Flex,
  Icon,

} from '@chakra-ui/react';
import { 
  EyeIcon,
  CodeBracketIcon,
  ServerIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "E-commerce API",
      description: "API REST completa para plataforma de comercio electrónico con autenticación JWT, procesamiento de pagos y gestión de inventario.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      category: "api",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Sistema de Microservicios",
      description: "Arquitectura de microservicios para aplicación bancaria con Docker, Kubernetes y comunicación asíncrona.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "Redis"],
      category: "microservicios",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "GraphQL API Gateway",
      description: "Gateway unificado que conecta múltiples servicios backend usando GraphQL con caching inteligente.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["GraphQL", "Apollo Server", "Node.js", "PostgreSQL"],
      category: "api",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 4,
      title: "Sistema de Monitoreo",
      description: "Plataforma de monitoreo en tiempo real para infraestructura cloud con alertas automáticas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "Celery", "Prometheus", "Grafana"],
      category: "herramientas",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 5,
      title: "Chat en Tiempo Real",
      description: "Aplicación de chat escalable con WebSockets, salas privadas y notificaciones push.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Socket.io", "Node.js", "React", "MongoDB"],
      category: "web",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 6,
      title: "API de Machine Learning",
      description: "Servicio REST para modelos de ML con preprocessing automático y predicciones en batch.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Flask", "TensorFlow", "Docker", "AWS"],
      category: "api",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const categories = [
    { label: "Todos", value: "todos" },
    { label: "APIs", value: "api" },
    { label: "Microservicios", value: "microservicios" },
    { label: "Web Apps", value: "web" },
    { label: "Herramientas", value: "herramientas" }
  ];

  const filteredProjects = activeTab === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const featuredProjects = projects.filter(project => project.featured);

  const bg = 'gray.50';
  const cardBg = 'white';

  return (
    <Box as="section" id="proyectos" bg={bg} py={{ base: 16, lg: 24 }} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="7xl">
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="medium"
              color="blue.600"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Portafolio
            </Text>
            <Heading as="h2" size="2xl" color="gray.800">
              Proyectos Destacados
            </Heading>
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="2xl"
              textAlign="center"
            >
              Una selección de mis mejores trabajos en desarrollo backend, 
              desde APIs REST hasta arquitecturas de microservicios.
            </Text>
          </VStack>

          {/* Featured Projects */}
          <Box w="full">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  bg={cardBg}
                  shadow="md"
                  borderRadius="lg"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-8px)',
                    shadow: 'xl',
                  }}
                >
                  <Box position="relative" h="48" overflow="hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                      transition="transform 0.3s"
                      _hover={{ transform: 'scale(1.05)' }}
                    />
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="linear(to-t, blackAlpha.600, transparent)"
                    />
                    <Box position="absolute" bottom={4} left={4} right={4}>
                      <Heading as="h3" size="md" color="white" mb={1}>
                        {project.title}
                      </Heading>
                    </Box>
                  </Box>
                  <CardBody p={6}>
                    <Text color="gray.600" mb={4} lineHeight="relaxed">
                      {project.description}
                    </Text>
                    
                    <Flex flexWrap="wrap" gap={2} mb={4}>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge
                          key={index}
                          colorScheme="blue"
                          variant="subtle"
                          fontSize="xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          colorScheme="gray"
                          variant="subtle"
                          fontSize="xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </Flex>

                    <HStack spacing={3}>
                      <Button
                        size="sm"
                        variant="outline"
                        colorScheme="blue"
                        leftIcon={<Icon as={EyeIcon} boxSize={4} />}
                      >
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        colorScheme="gray"
                        leftIcon={<Icon as={CodeBracketIcon} boxSize={4} />}
                      >
                        Código
                      </Button>
                    </HStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* All Projects with Filter Buttons */}
          <Box w="full">
            <Heading as="h3" size="xl" color="gray.800" mb={8} textAlign="center">
              Todos los Proyectos
            </Heading>
            
            {/* Filter Buttons */}
            <HStack spacing={4} justify="center" mb={8} flexWrap="wrap">
              {categories.map(({ label, value }) => (
                <Button
                  key={value}
                  size="md"
                  variant={activeTab === value ? "solid" : "outline"}
                  colorScheme="blue"
                  onClick={() => setActiveTab(value)}
                >
                  {label}
                </Button>
              ))}
            </HStack>
            
            {/* Projects Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  bg={cardBg}
                  shadow="md"
                  borderRadius="lg"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: 'lg',
                  }}
                >
                  <Box position="relative" h="40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                  <CardBody p={4}>
                    <Heading as="h4" size="md" color="gray.800" mb={2}>
                      {project.title}
                    </Heading>
                    <Text
                      color="gray.600"
                      mb={3}
                      noOfLines={2}
                    >
                      {project.description}
                    </Text>
                    <HStack spacing={2} mb={3} flexWrap="wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} colorScheme="blue" variant="subtle">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </CardBody>
                  <CardFooter p={4} pt={0}>
                    <HStack spacing={2} w="full">
                      <Button
                        size="sm"
                        variant="outline"
                        colorScheme="blue"
                        leftIcon={<Icon as={EyeIcon} boxSize={4} />}
                        flex={1}
                      >
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        colorScheme="gray"
                        leftIcon={<Icon as={CodeBracketIcon} boxSize={4} />}
                        flex={1}
                      >
                        Código
                      </Button>
                    </HStack>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
