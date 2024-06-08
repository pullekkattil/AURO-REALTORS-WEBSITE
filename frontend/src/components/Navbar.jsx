import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" w="100%" bg="rgba(0,0,0,0.4)" p={4} position="fixed" top={0} zIndex={1} fontSize="xl">
      <Flex alignItems="center" justifyContent="center" gap={"12"}>
        <ChakraLink as={RouterLink} to="/" color={"white"}>Our Why</ChakraLink>
        <ChakraLink href='#section_services' color={"white"}>Services</ChakraLink>
        <ChakraLink as={RouterLink} to="/second" color="#E57844" fontSize="3xl" fontWeight="bold" fontFamily={"mono"}>AURO GLOBAL</ChakraLink>
        <ChakraLink href='#section_about' color={"white"}>About Us</ChakraLink>
        <ChakraLink href='#section_contact' color={"white"}>Message Us</ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
