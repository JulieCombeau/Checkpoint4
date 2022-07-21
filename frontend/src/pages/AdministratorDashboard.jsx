import { Box, Flex, Heading, Text, Switch } from "@chakra-ui/react";
import React, { useState } from "react";

import Header from "../components/Header";
import AdminUser from "../components/AdminDashboard/AdminUser";

export default function AdministratorDashboard() {
  const [isGame, setIsGame] = useState(false);

  return (
    <Box h="100vh">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Header />
        <Flex
          bgColor="#FFFDF8"
          flexDir="column"
          minW="84vw"
          minH="100vh"
          gap="5"
          h="fit-content"
        >
          <Heading m="1rem" color="#4F3521">
            Panneau d'administration des jeux
          </Heading>
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap="5">
            <Flex
              mx="auto"
              p="1rem"
              flexDir="column"
              w={{ base: "100%", md: "90%" }}
              gap="10"
              boxShadow="2xl"
              borderRadius="20px"
            >
              <Flex w="100%" justifyContent="center" gap="20px">
                <Text fontSize="xl">Utilisateur</Text>
                <Switch
                  alignSelf="center"
                  size="lg"
                  color="brown"
                  id="choiceToggle"
                  onChange={() => setIsGame(!isGame)}
                />
                <Text fontSize="xl">Jeu</Text>
              </Flex>
              <AdminUser />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
