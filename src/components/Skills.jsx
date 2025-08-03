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
  SimpleGrid,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript/Node.js", level: 95, color: "blue" },
        { name: "Python", level: 90, color: "green" },
        { name: "TypeScript", level: 85, color: "indigo" },
        { name: "Java", level: 80, color: "orange" },
        { name: "Go", level: 75, color: "cyan" },
        { name: "PHP", level: 70, color: "purple" }
      ]
    },
    {
      title: "Frameworks & Librerías",
      skills: [
        { name: "Express.js", level: 95, color: "blue" },
        { name: "FastAPI", level: 90, color: "green" },
        { name: "Django", level: 85, color: "indigo" },
        { name: "Spring Boot", level: 80, color: "orange" },
        { name: "NestJS", level: 78, color: "red" },
        { name: "Flask", level: 75, color: "purple" }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 92, color: "blue" },
        { name: "MongoDB", level: 88, color: "green" },
        { name: "Redis", level: 85, color: "red" },
        { name: "MySQL", level: 82, color: "orange" },
        { name: "Elasticsearch", level: 78, color: "yellow" },
        { name: "DynamoDB", level: 75, color: "purple" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 90, color: "blue" },
        { name: "AWS", level: 85, color: "orange" },
        { name: "Kubernetes", level: 80, color: "indigo" },
        { name: "CI/CD", level: 85, color: "green" },
        { name: "Terraform", level: 75, color: "purple" },
        { name: "Nginx", level: 82, color: "cyan" }
      ]
    }
  ];

  const tools = [
    "Git & GitHub",
    "Postman",
    "Swagger/OpenAPI",
    "Jest & Testing",
    "Prometheus",
    "Grafana",
    "Jenkins",
    "Jira",
    "VS Code",
    "Linux/Unix",
    "GraphQL",
    "WebSockets"
  ];

  // Colores responsive al tema con mejor contraste
  const bg = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.100'); // Más claro en modo oscuro
  const skillTextColor = useColorModeValue('gray.700', 'white'); // Blanco en modo oscuro
  const accentColor = useColorModeValue('blue.600', 'blue.200'); // Más claro en modo oscuro
  const toolsBg = useColorModeValue('white', 'gray.700');

  return (
    <Box as="section" id="habilidades" bg={bg} py={{ base: 16, lg: 24 }} px={{ base: 4, sm: 6, lg: 8 }}>
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
              Expertise Técnico
            </Text>
            <Heading as="h2" size="2xl" color={headingColor}>
              Mis <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">Habilidades</Text>
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="3xl"
              textAlign="center"
              lineHeight="relaxed"
            >
              Un conjunto completo de tecnologías y herramientas que domino para 
              crear soluciones backend robustas y escalables.
            </Text>
          </VStack>

          {/* Technical Skills */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                bg={cardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
              >
                <CardBody p={8}>
                  <Heading as="h3" size="lg" color={headingColor} mb={6} textAlign="center">
                    {category.title}
                  </Heading>
                  <VStack spacing={6}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} w="full">
                        <Flex justify="space-between" align="center" mb={2}>
                          <Text fontSize="sm" fontWeight="medium" color={skillTextColor}>
                            {skill.name}
                          </Text>
                          <Text fontSize="sm" color={accentColor} fontWeight="medium">
                            {skill.level}%
                          </Text>
                        </Flex>
                        <Progress 
                          value={skill.level} 
                          colorScheme={skill.color}
                          size="sm"
                          borderRadius="md"
                        />
                      </Box>
                    ))}
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {/* Tools & Technologies */}
          <Card
            bg={useColorModeValue('linear(to-br, blue.50, purple.50)', 'gray.800')}
            bgGradient={useColorModeValue('linear(to-br, blue.50, purple.50)', 'linear(to-br, gray.800, gray.700)')}
            shadow="md"
            borderRadius="lg"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            w="full"
          >
            <CardBody p={8}>
              <Heading as="h3" size="lg" color={headingColor} mb={8} textAlign="center">
                Herramientas & Tecnologías
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                {tools.map((tool, index) => (
                  <Box
                    key={index}
                    bg={toolsBg}
                    p={4}
                    borderRadius="lg"
                    shadow="sm"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{
                      shadow: 'md',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <Text 
                      fontSize="sm" 
                      fontWeight="medium" 
                      color={skillTextColor}
                      _hover={{ color: accentColor }}
                      transition="colors 0.3s"
                    >
                      {tool}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </CardBody>
          </Card>

          {/* Soft Skills */}
          <Box w="full">
            <Heading as="h3" size="lg" color={headingColor} mb={8} textAlign="center">
              Habilidades Blandas
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {[
                {
                  title: "Resolución de Problemas",
                  description: "Capacidad analítica para identificar y resolver problemas complejos de manera eficiente."
                },
                {
                  title: "Trabajo en Equipo",
                  description: "Colaboración efectiva con equipos multidisciplinarios y comunicación clara."
                },
                {
                  title: "Liderazgo Técnico",
                  description: "Experiencia guiando equipos de desarrollo y tomando decisiones arquitectónicas."
                },
                {
                  title: "Aprendizaje Continuo",
                  description: "Pasión por mantenerse actualizado con las últimas tecnologías y tendencias."
                }
              ].map((softSkill, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  shadow="md"
                  borderRadius="lg"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                  textAlign="center"
                >
                  <CardBody p={6}>
                    <Heading as="h4" size="md" color={headingColor} mb={3}>
                      {softSkill.title}
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      {softSkill.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
