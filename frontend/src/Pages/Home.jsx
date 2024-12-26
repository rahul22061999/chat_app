import React from "react";
import { Button, Image } from "@chakra-ui/react";
import bgimg from "../assets/bg_img.png";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Link to="/home">
        <Button colorPalette="teal" variant="solid" cursor="pointer">
          Welcome
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;
