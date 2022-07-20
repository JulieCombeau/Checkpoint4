import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Header from "../components/Header";
import Filters from "../components/Home/Filters";
import MiniCard from "../components/GamesCards/MiniCard";

export default function Home() {
  return (
    <Box h="100vh">
      <Flex>
        <Flex
          minW="17vw"
          minH="20vh"
          gap="20px"
          flexDir="column"
          bgColor="blue"
        >
          <Header />
        </Flex>
        <Flex flexDir="column" minW="83vw" minH="20vh" gap="5">
          <Heading m="1rem">A quoi on joue ?</Heading>
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap="5">
            <Flex
              p="1rem"
              flexDir={{ base: "row", md: "column" }}
              justifyContent="space-between"
              w={{ base: "100%", md: "30%" }}
              align={{ base: "center", md: "left" }}
            >
              <Flex
                m="0.5rem"
                bgColor="red"
                borderRadius="100%"
                w="150px"
                h="150px"
                alignSelf="center"
              >
                <Text m="auto">Nombre d'utilisateur</Text>
              </Flex>
              <Flex
                m="0.5rem"
                bgColor="red"
                borderRadius="100%"
                w="150px"
                h="150px"
                alignSelf="center"
              >
                <Text m="auto">Nombre de jeux</Text>
              </Flex>
              <Flex
                m="0.5rem"
                bgColor="red"
                borderRadius="100%"
                w="150px"
                h="150px"
                alignSelf="center"
              >
                <Text m="auto">schéma 1</Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" w={{ base: "100%", md: "70%" }} gap="10">
              <Filters />
              <Flex
                justifyContent="center"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                // minW="100%"
                w="fit-content"
              >
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
