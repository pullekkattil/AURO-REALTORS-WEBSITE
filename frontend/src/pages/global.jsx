import { Box, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import Global_form from '../components/global_form'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Global = () => {
  return (
    <>
    <Flex
      justify="center"
      align="center"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="0"
      bg="rgba(0,0,0,0.4)"
      w="1200px"
      h="800px"
    >
      <Box>
        <Global_form />
      </Box>
    </Flex>
    </>
  );
}

export default Global;
