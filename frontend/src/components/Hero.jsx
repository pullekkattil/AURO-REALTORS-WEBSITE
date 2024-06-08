import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <Box 
        w="100vw" 
        h="100vh" 
        display="flex" 
        alignItems="flex-end" 
        p={10}
      >
        <Box textAlign="left">
          <Heading 
            as="h1" 
            fontSize="6xl" 
            fontWeight="extrabold" 
            mb={4} 
            fontFamily="'Playfair Display', serif"
            color="white"
          >
            <span style={{ color: 'orange' }}>AURO</span> Realty Consultants
          </Heading>
          <Heading 
            as="h2" 
            fontSize="4xl" 
            fontWeight="bold" 
            mb={6} 
            fontFamily="'Playfair Display', serif"
            color="white"
          >
            Your Trusted Partner in Real Estate
          </Heading>
          <Link to="/second">
          <Button colorScheme="orange" size="lg">Connect with us</Button>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Hero;
