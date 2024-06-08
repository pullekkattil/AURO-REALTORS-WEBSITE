import { Box, Flex, Heading, Image, Text, Spacer } from '@chakra-ui/react';
import React from 'react';
import newyork from '../assets/newyork2.jpg';
import newyork2 from '../assets/newyork.webp';
import worldmap from '../assets/worldmap.jpg';

const Aboutus = () => {
  return (
    <>
      <Box bgGradient='linear(black, orange)' w="100vw" h="auto" py="20">
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10"} height="100%">
          <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10"} width="80%">
            <Box textAlign={"right"} flex="1">
              <Heading as={"h1"} color={"white"} fontSize="7xl">
                Our Story
              </Heading>
              <Text color={"white"}>
                In the bustling streets of New York, our journey began with a simple yet powerful vision: to transform the way people find and invest in properties. We started as a small team with a big dream, driven by a passion to connect clients with their ideal homes and investment opportunities. Over the years, our unwavering commitment to excellence and personalized service has turned that dream into a thriving reality. Today, we stand as a trusted name in realty consulting, guiding clients through every step of their real estate journey.
              </Text>
            </Box>
            <Image src={newyork} h="300px" w="500px" flex="1"/>
          </Flex>
          <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10"} width="80%">
            <Image src={newyork2} h="300px" w="500px" flex="1"/>
            <Box textAlign={"left"} flex="1">
              <Heading as={"h1"} color={"white"} fontSize="7xl">
                Mission
              </Heading>
              <Text color={"white"}>
                Our mission is to revolutionize the real estate industry by delivering bespoke consulting services that cater to the unique needs of each client. We believe in building lasting relationships based on trust and transparency. Our dedicated team works tirelessly to provide innovative solutions and unparalleled guidance, ensuring that every transaction is seamless and successful. From first-time homebuyers to seasoned investors, we are here to make your real estate dreams a reality.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10"} width="80%">
            <Box textAlign={"right"} flex="1">
              <Heading as={"h1"} color={"white"} fontSize="7xl">
                Vision
              </Heading>
              <Text color={"white"}>
                Our vision is to set the standard for excellence in the real estate consulting industry. We aspire to be the go-to firm for clients seeking expert advice, comprehensive market insights, and a personalized approach to real estate. By continuously evolving and embracing cutting-edge technologies, we aim to stay ahead of market trends and provide our clients with the most effective strategies for success. We envision a future where everyone has access to their dream property, guided by our expertise and unwavering dedication.
              </Text>
            </Box>
            <Image src={worldmap} h="300px" w="500px" flex="1"/>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Aboutus;
