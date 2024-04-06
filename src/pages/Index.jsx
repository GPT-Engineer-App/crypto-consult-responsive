import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Stack, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEthereum, FaLock, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" backgroundImage="https://images.unsplash.com/photo-1707075891517-c23d276feef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMjQzODEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" py={20} px={[4, 8]}>
        <Box maxWidth="600px" color="white">
          <Heading as="h1" size="2xl" mb={4}>
            Crypta Corp
          </Heading>
          <Text fontSize="xl" mb={8}>
            Empowering businesses with blockchain solutions and smart contract development
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
      </Flex>

      {/* Services Section */}
      <Box py={20} px={[4, 8]}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Our Services
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box p={6} borderRadius="md" boxShadow="md" bg={useColorModeValue("white", "gray.800")}>
            <Icon as={FaEthereum} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Blockchain Consulting
            </Heading>
            <Text>We provide expert guidance on blockchain technology and its applications for your business.</Text>
          </Box>
          <Box p={6} borderRadius="md" boxShadow="md" bg={useColorModeValue("white", "gray.800")}>
            <Icon as={FaLock} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Smart Contract Development
            </Heading>
            <Text>Our team develops secure and efficient smart contracts tailored to your specific needs.</Text>
          </Box>
          <Box p={6} borderRadius="md" boxShadow="md" bg={useColorModeValue("white", "gray.800")}>
            <Icon as={FaChartLine} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              DApp Development
            </Heading>
            <Text>We build decentralized applications (DApps) that leverage the power of blockchain technology.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* About Section */}
      <Box py={20} px={[4, 8]} bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex flexDirection={["column", "row"]} alignItems="center">
          <Box flex={1} mb={[8, 0]}>
            <Image src="https://images.unsplash.com/photo-1708882308480-9188ed7e7d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fHx8MTcxMjM4NTkyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team" borderRadius="md" boxShadow="md" />
          </Box>
          <Box flex={1} ml={[0, 12]}>
            <Heading as="h2" size="xl" mb={4}>
              About Crypta Corp
            </Heading>
            <Text fontSize="lg" mb={8}>
              Crypta Corp is a leading blockchain consulting and smart contract development company. We help businesses harness the potential of blockchain technology to streamline processes, enhance security, and unlock new opportunities.
            </Text>
            <Button colorScheme="blue" size="lg">
              Learn More
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box py={20} px={[4, 8]}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Contact Us
        </Heading>
        <Stack direction={["column", "row"]} spacing={[8, 12]} justifyContent="center">
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Email
            </Heading>
            <Text>info@cryptacorp.com</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Phone
            </Heading>
            <Text>+1 (123) 456-7890</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Address
            </Heading>
            <Text>123 Blockchain Ave, Cryptoville, CA 90210</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
