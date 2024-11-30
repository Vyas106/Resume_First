import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Heading, 
  Image, 
  Flex, 
  Grid, 
  GridItem, 
  Link,
  Button,
  useClipboard,
  Container
} from '@chakra-ui/react';
import { 
  FaGithub, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt, 
  FaTools,
  FaUniversity,
  FaCertificate
} from 'react-icons/fa';

const Resume = () => {
  const { hasCopied, onCopy } = useClipboard('vyasvishal.work@gmail.com');

  const projects = [
    {
      title: "Rajwen",
      description: "Modern restaurant platform featuring real-time ordering, secure payment processing, and an intuitive admin dashboard for menu management.",
      image: "https://via.placeholder.com/400x300",
      techStack: ["React.js", "Node.js", "Express", "Firebase", "Stripe"],
      github: "https://github.com/username/rajwen",
      live: "https://rajwen.demo",
    },
    {
      title: "Raaaz.io",
      description: "Real-time chat application with features like instant messaging, and user presence indicators.",
      image: "https://via.placeholder.com/400x300",
      techStack: ["Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/username/raaaz",
      live: "https://raaaz.io",
    },
    {
      title: "Uber Clone",
      description: "Ride-booking app with real-time tracking, user authentication, and payment integration.",
      image: "https://via.placeholder.com/400x300",
      techStack: ["React", "Node.js", "MongoDB", "Next.js", "WebRTC"],
      github: "https://github.com/username/uber-clone",
      live: "https://uber-clone.demo",
    },
    {
      title: "CodeLab Club",
      description: "Student-led tech innovation hub. As the Head of CodeLab, I led initiatives to foster coding skills, organize hackathons, and develop collaborative tech projects.",
      image: "https://via.placeholder.com/400x300",
      techStack: ["Leadership", "Project Management", "Community Building", "Tech Innovation"],
      github: "https://github.com/codelab-club",
      live: "https://codelab-club.demo",
    }
  ];

  return (
    <Box 
      bg="gray.900" 
      color="white" 
      minHeight="100vh" 
      py={16}
      className="bg-gradient-to-br from-gray-900 to-black"
    >
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
          {/* Profile Section */}
          <GridItem>
            <VStack 
              spacing={6} 
              align="stretch" 
              bg="gray.800" 
              p={6} 
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
            >
              <Image 
                src="/me2.jpg" 
                alt="Vishal Vyas" 
                objectFit="cover" 
                borderRadius="xl"
                boxShadow="md"
              />
              <VStack align="start" spacing={2}>
                <Text 
                  textTransform="uppercase" 
                  letterSpacing="wide" 
                  color="blue.400" 
                  fontWeight="bold"
                >
                  Full Stack Developer
                </Text>
                <Heading size="xl" fontWeight="bold">Vishal Vyas</Heading>
                <Text color="gray.400">Head of CodeLab Student Tech Club</Text>
              </VStack>

              {/* Contact Information */}
              <VStack align="start" spacing={3} w="full">
                <HStack spacing={4}>
                  <FaEnvelope color="#4299E1" />
                  <Text>{hasCopied ? "Email Copied!" : "vyasvishal.work@gmail.com"}</Text>
                  <Button 
                    size="sm" 
                    colorScheme="blue" 
                    onClick={onCopy}
                  >
                    Copy
                  </Button>
                </HStack>
                <HStack spacing={4}>
                  <FaPhone color="#4299E1" />
                  <Text>9726270553</Text>
                </HStack>
              </VStack>

              {/* Social Links */}
              <HStack spacing={4}>
                <Link href="#" isExternal>
                  <FaGithub size={28} />
                </Link>
                <Link href="#" isExternal>
                  <FaLinkedin size={28} />
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          {/* About and Skills Section */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* About Me */}
              <Box 
                bg="gray.800" 
                p={6} 
                borderRadius="xl"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
              >
                <Heading 
                  size="md" 
                  mb={4} 
                  textTransform="uppercase" 
                  color="blue.400"
                >
                  About Me
                </Heading>
                <Text color="gray.300" lineHeight="tall">
                  Hi, I'm Vyas Vishal, a Full Stack Software Engineer and the Head of CodeLab Student Tech Club. 
                  I specialize in developing innovative web applications that solve real-world problems.
                </Text>
              </Box>

              {/* Skills */}
              <Box 
                bg="gray.800" 
                p={6} 
                borderRadius="xl"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
              >
                <Heading 
                  size="md" 
                  mb={4} 
                  textTransform="uppercase" 
                  color="blue.400"
                >
                  Skills
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {[
                    { title: "Front-End", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
                    { title: "Back-End", skills: ["Node.js", "Express.js", "Python"] },
                    { title: "Database", skills: ["MongoDB", "SQL", "Firebase"] },
                    { title: "Soft Skills", skills: ["Leadership", "Problem Solving", "Communication"] }
                  ].map((category, index) => (
                    <VStack key={index} align="start" spacing={2}>
                      <Text fontWeight="bold" color="gray.200">{category.title}</Text>
                      {category.skills.map((skill, idx) => (
                        <Text key={idx} color="gray.400" fontSize="sm">
                          {skill}
                        </Text>
                      ))}
                    </VStack>
                  ))}
                </Grid>
              </Box>
            </VStack>
          </GridItem>

          {/* Projects Section */}
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <VStack 
              spacing={6} 
              align="stretch" 
              bg="gray.800" 
              p={8} 
              borderRadius="xl"
              boxShadow="lg"
            >
              <Heading 
                size="lg" 
                textTransform="uppercase" 
                color="blue.400" 
                textAlign="center"
              >
                Projects
              </Heading>
              <Grid 
                templateColumns={{ 
                  base: "1fr", 
                  sm: "repeat(2, 1fr)", 
                  lg: "repeat(4, 1fr)" 
                }} 
                gap={6}
              >
                {projects.map((project, index) => (
                  <VStack 
                    key={index} 
                    spacing={4} 
                    bg="gray.700" 
                    borderRadius="xl" 
                    overflow="hidden"
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      objectFit="cover" 
                      h="200px" 
                      w="full"
                    />
                    <VStack spacing={3} p={4} align="start" w="full">
                      <Heading size="md">{project.title}</Heading>
                      <Text color="gray.400" fontSize="sm">
                        {project.description}
                      </Text>
                      
                      <VStack align="start" w="full">
                        <Text color="blue.400" fontWeight="bold">Tech Stack</Text>
                        <HStack flexWrap="wrap">
                          {project.techStack.map((tech, idx) => (
                            <Text 
                              key={idx} 
                              bg="gray.600" 
                              px={2} 
                              py={1} 
                              borderRadius="full" 
                              fontSize="xs"
                            >
                              {tech}
                            </Text>
                          ))}
                        </HStack>
                      </VStack>

                      <HStack w="full">
                        <Button 
                          leftIcon={<FaGithub />} 
                          variant="outline" 
                          colorScheme="blue" 
                          size="sm" 
                          w="full"
                        >
                          Code
                        </Button>
                        <Button 
                          leftIcon={<FaExternalLinkAlt />} 
                          colorScheme="blue" 
                          size="sm" 
                          w="full"
                        >
                          Live
                        </Button>
                      </HStack>
                    </VStack>
                  </VStack>
                ))}
              </Grid>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;