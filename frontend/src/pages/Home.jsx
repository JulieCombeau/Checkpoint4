import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { useContext } from "react";

import Header from "../components/Header";
import Filters from "../components/Home/Filters";

import CurrentUsersContext from "../contexts/UsersContext";
import CurrentGamesContext from "../contexts/GamesContext";
import CurrentEditorsContext from "../contexts/EditorsContext";

export default function Home() {
  const { users } = useContext(CurrentUsersContext);
  const { games } = useContext(CurrentGamesContext);
  const { editors } = useContext(CurrentEditorsContext);

  const numberOfGame = games.length;
  const numberOfUsers = users.length;
  const numberOfEditors = editors.length;

  return (
    <Box h="100vh">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Header />
        <Flex
          bgColor="#FFFDF8"
          flexDir="column"
          minW="81vw"
          minH={{ base: "90vh", lg: "100vh" }}
          h="fit-content"
        >
          <Heading m="1rem" color="#4F3521">
            A quoi on joue ?
          </Heading>
          <Flex w="100%" flexDir={{ base: "column", lg: "row" }} rowGap="5">
            <Flex
              ml="auto"
              alignSelf="center"
              boxShadow="2xl"
              borderRadius="20px"
              h="fit-content"
              p="1rem"
              flexDir={{ base: "row", lg: "column" }}
              justifyContent="space-between"
              w={{ base: "100%", lg: "20%" }}
              maxW={{ base: "100%", lg: "200px" }}
              align={{ base: "center", lg: "left" }}
              rowGap="50px"
            >
              <Flex
                bgColor="white"
                p="0.5"
                flexDir="column"
                border="solid 1px"
                m="0.5rem"
                borderRadius="20px"
                w="100%"
                h="33%"
                maxH={{ base: "100px", sm: "33%" }}
                alignSelf="center"
              >
                <Box w="100%" h="50%">
                  <Text
                    fontSize={{ base: "4xl", md: "7xl" }}
                    textShadow="-5px 1px 4px rgba(79,53,33)"
                  >
                    {numberOfUsers}
                  </Text>
                </Box>
                <Text m="auto" mb="0.5rem">
                  Nombre de d'utilisateurs
                </Text>
              </Flex>
              <Flex
                bgColor="white"
                p="0.5"
                flexDir="column"
                border="solid 1px"
                m="0.5rem"
                borderRadius="20px"
                w="100%"
                h="33%"
                maxH={{ base: "100px", sm: "33%" }}
                alignSelf="center"
              >
                <Box w="100%" h="50%">
                  <Text
                    fontSize={{ base: "4xl", md: "7xl" }}
                    textShadow="-5px 1px 4px rgba(79,53,33)"
                  >
                    {numberOfGame}
                  </Text>
                </Box>
                <Text m="auto" mb="0.5rem">
                  Nombre de jeux
                </Text>
              </Flex>
              <Flex
                bgColor="white"
                p="0.5"
                flexDir="column"
                border="solid 1px"
                m="0.5rem"
                borderRadius="20px"
                w="100%"
                h="33%"
                maxH={{ base: "100px", sm: "33%" }}
                alignSelf="center"
              >
                <Box w="100%" h="50%">
                  <Text
                    fontSize={{ base: "4xl", md: "7xl" }}
                    textShadow="-5px 1px 4px rgba(79,53,33)"
                  >
                    {numberOfEditors}
                  </Text>
                </Box>
                <Text m="auto" mb="0.5rem">
                  Nombre de vendeurs
                </Text>
              </Flex>
            </Flex>
            <Filters />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
