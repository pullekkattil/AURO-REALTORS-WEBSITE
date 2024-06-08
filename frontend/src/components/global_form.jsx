import React, { useState } from "react";
import branchesData from "./branches.json";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import newRequest from '../utils/newRequest';

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [officeInfo, setOfficeInfo] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    // Filter branches based on selected country
    const filteredBranches = branchesData.filter(
      (branch) => branch.country === country
    );
 
    setOfficeInfo(filteredBranches);
  };

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
      const response = await newRequest.post('/branches', {
        username: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      console.log('Message sent:', response.data);
      // Clear form fields after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Link to="/">
              <Button bg="rgba(0,0,0,0.3)" color="orange">Go back home</Button>
            </Link>
            <Heading as="h2" color="white">
              Hear from us
            </Heading>
            <Heading as="h1" color="orange">
              WE GOT YOU COVERED GLOBALLY
            </Heading>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              {/* Select country */}
              <WrapItem>
                <Box mt="25px">
                  <Text>Choose a country to see our branches</Text>
                  <FormControl>
                    <Select
                      value={selectedCountry}
                      color="orange"
                      onChange={handleCountryChange}
                      placeholder="Select country"
                      mt={3}
                      borderColor="white"
                    >
                      {/* Populate dropdown with unique country names */}
                      {branchesData
                        .reduce((uniqueCountries, branch) => {
                          if (!uniqueCountries.includes(branch.country)) {
                            uniqueCountries.push(branch.country);
                          }
                          return uniqueCountries;
                        }, [])
                        .map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                  {/* Display office details */}
                  {officeInfo.length > 0 && (
                    <Box mt={5} bg="rgba(0,0,0,0.7)">
                      <Heading as="h3" size="md">Office Details:</Heading>
                      {officeInfo.map((branch, index) => (
                        <div key={index}>
                          <Heading as="h4" size="sm" m="10px" color="orange">Branch {index + 1} Details:</Heading>
                          <Text>Name: {branch.Name}</Text>
                          <Text>Address: {branch.Address}</Text>
                          <Text>Email: {branch["Email id"]}</Text>
                          <Text>Phone number: {branch["Phone number"]}</Text>
                        </div>
                      ))}
                      <Box>Link</Box>
                    </Box>
                  )}
                </Box>
              </WrapItem>
              {/* Contact form */}
              <WrapItem>
                <Box borderRadius="lg">
                  <Box m={8} color="orange">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="white">
                          <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                          <Input
                            type="text"
                            size="md"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="white">
                        <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                           <Input type="email"
                           size="md"
                           name="email"
                           placeholder="Your Email"
                           value={formData.email}
                           onChange={handleInputChange}
                         />
                       
                        </InputGroup>
                      </FormControl>
                      <FormControl id="phone">
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup borderColor="white">
                          <Input
                            type="tel"
                            size="md"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="white"
                          _hover={{ borderRadius: "gray.300" }}
                          placeholder="Type your requirements here..."
                          value={formData.message}
                          name="message"
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      {/* Submit button */}
                      <Button
                        type="submit"
                        variant="solid"
                        bg="orange"
                        color="black"
                        onClick={handleSubmit}
                      >
                        Request A Callback
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;

