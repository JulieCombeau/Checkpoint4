import { Box, Flex, Heading, Text, Image, Tag } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineCategory, MdOutlineFamilyRestroom } from "react-icons/md";
import { GiSandsOfTime, GiTabletopPlayers } from "react-icons/gi";
import Header from "../components/Header";
import ButtonGroupGameNavigation from "../components/GamesDetails/ButtonGroupGameNavigation";
import backendAPI from "../services/backendAPI";

export default function GameDetails() {
  const { gameId } = useParams();
  const [game, setGame] = useState([]);

  const getOneGame = () => {
    backendAPI
      .get(`/api/games/${gameId}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getOneGame();
  }, []);

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
            Détails du jeu
          </Heading>
          <Text fontSize="6xl">{game.title}</Text>
          <Flex
            justifyContent="center"
            columnGap="3"
            rowGap="2"
            flexWrap="wrap"
            h="fit-content"
            w="fit-content"
            alignSelf="center"
          >
            <Tag
              size="lg"
              variant="subtle"
              bgColor="#A07B5E"
              color="white"
              gap="2"
            >
              <GiTabletopPlayers size="30px" />
              <Text fontSize={{ base: "md", md: "xl" }}>{game.players}</Text>
            </Tag>
            <Tag
              size="lg"
              variant="subtle"
              bgColor="#A07B5E"
              color="white"
              gap="2"
            >
              <MdOutlineFamilyRestroom size="30px" />
              <Text fontSize={{ base: "md", md: "xl" }}>{game.age}</Text>
            </Tag>
            <Tag
              size="lg"
              variant="subtle"
              bgColor="#A07B5E"
              color="white"
              gap="2"
            >
              <GiSandsOfTime size="30px" />
              <Text fontSize={{ base: "md", md: "xl" }}>{game.duration}</Text>
            </Tag>
            <Tag
              size="lg"
              variant="subtle"
              bgColor="#A07B5E"
              color="white"
              gap="2"
            >
              <MdOutlineCategory size="30px" />
              <Text fontSize={{ base: "md", md: "xl" }}>{game.category}</Text>
            </Tag>
          </Flex>
          <Flex
            w="100%"
            flexDir={{ base: "column", md: "row" }}
            rowGap="5"
            h={{ base: "80vh", md: "70vh" }}
            alignItems="center"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              p={5}
              w="100%"
              align="center"
              mb="10px"
              // h="100%"
            >
              <Image
                src={game.picture}
                alt="game picture"
                style={{
                  maxHeight: "30vh",
                  borderRadius: "8px",
                }}
              />
              <Flex
                pl="20px"
                justifyContent="space-between"
                width="100%"
                alignItems="center"
                alignSelf="flex-start"
                flexDir="column"
                rowGap="5"
                minH="50vh"
              >
                <ButtonGroupGameNavigation game={game} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
