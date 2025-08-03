import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "john.developer@email.com",
      link: "mailto:john.developer@email.com"
    },
    {
      icon: PhoneIcon,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPinIcon,
      title: "Ubicación",
      value: "Ciudad de México, México",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  // Colores responsive al tema con mejor contraste
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.100'); // Más claro en modo oscuro
  const accentColor = useColorModeValue('blue.600', 'blue.200'); // Más claro en modo oscuro
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, blue.50)',
    'linear(to-br, gray.900, gray.800)'
  );
  const ctaCardBg = useColorModeValue('linear(to-br, green.50, emerald.50)', 'linear(to-br, gray.800, gray.700)');
  const socialCardBg = useColorModeValue('linear(to-br, blue.600, purple.600)', 'linear(to-br, gray.800, gray.700)');
  const socialTextColor = useColorModeValue('blue.50', 'gray.100');
  const socialIconColor = useColorModeValue('yellow.300', 'yellow.300'); // Amarillo brillante para máxima visibilidad
  const socialIconHoverBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200');
  const contactIconBg = useColorModeValue('blue.50', 'gray.700');
  const contactIconColor = useColorModeValue('blue.600', 'blue.300');
  const contactLabelColor = useColorModeValue('gray.500', 'gray.400');
  const contactValueColor = useColorModeValue('gray.700', 'gray.100');

  return (
    <Box as="section" id="contacto" bgGradient={bgGradient} py={{ base: 16, lg: 24 }} px={{ base: 4, sm: 6, lg: 8 }}>
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
              Hablemos
            </Text>
            <Heading as="h2" size="2xl" color={headingColor}>
              Ponte en <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">Contacto</Text>
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="3xl"
              textAlign="center"
              lineHeight="relaxed"
            >
              ¿Tienes un proyecto en mente? ¿Necesitas un desarrollador backend experto? 
              Me encantaría escuchar sobre tu idea y cómo puedo ayudarte a hacerla realidad.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="full">
            {/* Left Column - Contact Info & Social */}
            <VStack spacing={6}>
              {/* Contact Information */}
              <Card
                bg={cardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8}>
                  <Heading as="h3" size="md" color={headingColor} mb={6}>
                    Información de Contacto
                  </Heading>
                  <VStack spacing={4}>
                    {contactInfo.map((info, index) => (
                      <Flex key={index} align="center" gap={4} w="full">
                        <Box p={3} bg={contactIconBg} borderRadius="lg">
                          <Icon as={info.icon} boxSize={5} color={contactIconColor} />
                        </Box>
                        <Box>
                          <Text fontSize="sm" color={contactLabelColor} fontWeight="medium">
                            {info.title}
                          </Text>
                          <Link
                            href={info.link}
                            color={contactValueColor}
                            _hover={{ color: accentColor }}
                            transition="colors 0.3s"
                          >
                            {info.value}
                          </Link>
                        </Box>
                      </Flex>
                    ))}
                  </VStack>
                </CardBody>
              </Card>

              {/* Social Links */}
              <Card
                bgGradient={socialCardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8} textAlign="center">
                  <Heading as="h3" size="md" color="white" mb={3}>
                    Sígueme en Redes Sociales
                  </Heading>
                  <Text color={socialTextColor} mb={6}>
                    Mantente al día con mis últimos proyectos y artículos técnicos
                  </Text>
                  <HStack justify="center" spacing={4}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        variant="solid"
                        bg="white"
                        color="gray.800"
                        _hover={{ 
                          bg: 'gray.100',
                          transform: 'translateY(-2px)',
                          shadow: 'lg'
                        }}
                        as="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        transition="all 0.3s"
                        size="md"
                        borderRadius="md"
                        icon={<Box color="gray.800">{social.icon}</Box>}
                      />
                    ))}
                  </HStack>
                </CardBody>
              </Card>

              {/* Call to Action */}
              <Card
                bgGradient={ctaCardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                w="full"
              >
                <CardBody p={8} textAlign="center">
                  <Heading as="h3" size="md" color={headingColor} mb={3}>
                    ¿Listo para Colaborar?
                  </Heading>
                  <Text color={textColor} mb={4}>
                    Estoy disponible para proyectos freelance y oportunidades de trabajo remoto.
                  </Text>
                  <Button
                    bg={useColorModeValue('green.600', 'green.600')}
                    bgGradient={useColorModeValue('linear(to-r, green.600, emerald.600)', 'linear(to-r, green.600, emerald.600)')}
                    color="white"
                    _hover={{
                      bg: useColorModeValue('green.700', 'green.700'),
                      bgGradient: useColorModeValue('linear(to-r, green.700, emerald.700)', 'linear(to-r, green.700, emerald.700)'),
                      transform: 'translateY(-2px)',
                      shadow: 'lg',
                    }}
                    transition="all 0.3s"
                    as="a"
                    href="#"
                    fontWeight="bold"
                    shadow="md"
                  >
                    Descargar CV
                  </Button>
                </CardBody>
              </Card>
            </VStack>

            {/* Contact Form */}
            <Box gridColumn={{ base: 1, lg: '2 / 4' }}>
              <Card
                bg={cardBg}
                shadow="md"
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                h="fit-content"
              >
                <CardBody p={8}>
                  <Heading as="h3" size="lg" color={headingColor} mb={6}>
                    Envíame un Mensaje
                  </Heading>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={6}>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                        <Input
                          placeholder="Nombre"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          focusBorderColor="blue.500"
                        />
                        <Input
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          focusBorderColor="blue.500"
                        />
                      </SimpleGrid>
                      <Input
                        placeholder="Asunto"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        focusBorderColor="blue.500"
                      />
                      <Textarea
                        placeholder="Mensaje"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        focusBorderColor="blue.500"
                      />
                      <Button
                        type="submit"
                        w="full"
                        bgGradient="linear(to-r, blue.600, purple.600)"
                        color="white"
                        _hover={{
                          bgGradient: 'linear(to-r, blue.700, purple.700)',
                        }}
                        size="lg"
                        leftIcon={<Icon as={PaperAirplaneIcon} boxSize={5} />}
                      >
                        Enviar Mensaje
                      </Button>
                    </VStack>
                  </form>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
