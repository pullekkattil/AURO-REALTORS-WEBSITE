import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  VStack,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import newRequest from '../utils/newRequest';

const ContactFormWithSocialButtons = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post('/messages', {
        user_name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      css={{
        background: "rgba(231, 159, 25, 0.7)",
        backgroundAttachment: 'fixed',
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
              fontFamily={"ginebra"}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: '#E57844',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="#">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: '#E57844',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: '#E57844',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: '#E57844',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <Button
                    colorScheme="black"
                    bg="black"
                    color="white"
                    _hover={{
                      bg: '#E57844',
                    }}
                    isFullWidth
                    onClick={handleSubmit}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactFormWithSocialButtons;
