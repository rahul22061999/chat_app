import React from 'react';
import '../App.css';
import {Box, Container, Tabs, Text} from "@chakra-ui/react";
import Signup from '../reactcomponents/authentication/Signup';
import Login from '../reactcomponents/authentication/Login'

const HomePage = () => {
  return (

    <Container maxW='xl' centerContent>
      <Box d="flex" 
        justifyContent="center"
        p="3px"
        bg={"#0C1C2B"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center">
        <Text fontSize="2xl" color="white">Chat MI</Text>
      </Box>
      <Box bg={"#0C1C2B"}
       w="100%"
       borderRadius="lg"
        borderWidth="1px"
       >
      <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Tabs.List mb="2em">
        <Tabs.Trigger width="50%" value="tab-1">Login</Tabs.Trigger>
        <Tabs.Trigger width="50%" value="tab-2">Signup</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1">
        <Login/>
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        <Signup/>
      </Tabs.Content>
    </Tabs.Root>
      </Box>
    </Container>
  )
}

export default HomePage