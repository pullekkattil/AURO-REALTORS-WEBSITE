import React from 'react'
import Navbar from './Navbar';
import PropTypes from "prop-types"
import { Box } from '@chakra-ui/react';
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
import Hero from './Hero';

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <Box as="main">
        {children}
    </Box>
    <Hero />
    <div id='section_about'>
      <Aboutus />
    </div>
    <div id='section_services'>
      <Services />
    </div>
    <div id='section_contact'> 
      <Contactus />
    </div>
    </>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout