import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Cards = ({ title, body, footer }) => {
  return (
    <Card bg="rgba(0,0,0,0.9)" color="orange" w="350px" h="350px" p={6}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  )
}

export default Cards
