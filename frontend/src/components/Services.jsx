import React from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Cards from '../ui/Card';

const Services = () => {
  const cardData = [
    {
      title: "Realty Consultancy",
      body: "Our expert consultants provide personalized guidance and comprehensive solutions for all your real estate needs. Whether you're buying, selling, or investing, we're here to help you navigate the complex real estate market with confidence."
    },
    {
      title: "Property Management",
      body: "Leave the hassle of property management to us. From tenant screening and rent collection to maintenance and repairs, our professional team ensures that your property is well-managed and profitable."
    },
    {
      title: "Investment Advisory",
      body: "Maximize your returns with our investment advisory services. Our team of experts analyzes market trends and identifies lucrative investment opportunities tailored to your financial goals and risk tolerance."
    },
    {
      title: "Market Analysis",
      body: "Gain valuable insights into the real estate market with our comprehensive market analysis reports. Stay informed about local trends, property values, and investment opportunities to make well-informed decisions."
    },
    {
      title: "Legal Assistance",
      body: "Navigate legal complexities with confidence. Our experienced legal team provides expert guidance on real estate transactions, contracts, and disputes, ensuring that your rights and interests are protected."
    }
  ];

  return (
    <>
      <Heading as="h1" fontSize="7xl" color="white" fontWeight="bold" textAlign="center" mb={6} fontFamily="Poppins">
       Our Services
      </Heading>
      <Flex justify="center" align="center" h="100vh">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {cardData.map((card, index) => (
            <GridItem key={index} colSpan={1}>
              <Cards title={card.title} body={card.body} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default Services;
