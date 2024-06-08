import React from 'react';
import vid1 from '../assets/nybridge.mp4';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import Global from './global';

const Second = () => {
  return (
    <Box position="relative">
      <AspectRatio ratio={16 / 9}>
        <video autoPlay loop muted src={vid1} style={{ width: "100%", height: "100%" }}></video>
      </AspectRatio>
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <Global />
      </Box>
    </Box>
  );
}

export default Second;
