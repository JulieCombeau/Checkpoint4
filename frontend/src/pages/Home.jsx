import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import Header from "../components/Header";
import Filters from "../components/Home/Filters";
import MiniCard from "../components/GamesCards/MiniCard";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <Box h="100vh">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Header />
        <Flex
          bgColor="#FFFDF8"
          flexDir="column"
          minW="81vw"
          minH="100vh"
          gap="5"
          h="fit-content"
        >
          <Heading m="1rem" color="#4F3521">
            A quoi on joue ?
          </Heading>
          <Flex w="100%" flexDir={{ base: "column", md: "row" }} rowGap="5">
            <Flex
              ml="auto"
              alignSelf="center"
              boxShadow="2xl"
              borderRadius="20px"
              h="fit-content"
              p="1rem"
              flexDir={{ base: "row", md: "column" }}
              justifyContent="space-between"
              w={{ base: "100%", md: "20%" }}
              maxW={{ base: "100%", md: "200px" }}
              align={{ base: "center", md: "left" }}
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
                alignSelf="center"
              >
                <Image src={logo} w="100%" h="50%" />
                <Text m="auto">Nombre d'utilisateur</Text>
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
                alignSelf="center"
              >
                <Image src={logo} w="100%" h="50%" />
                <Text m="auto">Nombre de jeux</Text>
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
                alignSelf="center"
              >
                <Image src={logo} w="100%" h="50%" />
                <Text m="auto">Nombre d'utilisateur</Text>
              </Flex>
            </Flex>
            <Flex
              mx="auto"
              p="1rem"
              flexDir="column"
              w={{ base: "100%", md: "75%" }}
              gap="10"
              boxShadow="2xl"
              borderRadius="20px"
            >
              <Filters />
              <Flex
                width={{ base: "100%", xl: "98%" }}
                justifyContent="space-around"
                rowGap="2"
                flexWrap="wrap"
                flexDirection="row"
                h="70vh"
                scrollBehavior="smooth"
                overflowY="auto"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "18px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "8px",
                    border: "2px",
                    color: "#4F3521",
                  },
                }}
              >
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
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
