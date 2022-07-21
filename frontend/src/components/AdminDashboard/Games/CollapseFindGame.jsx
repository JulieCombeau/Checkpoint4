/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";

import {
  Collapse,
  Image,
  Flex,
  Text,
  Input,
  List,
  ListItem,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import ModalFindGame from "./ModalFindGame";

import backendAPI from "../../../services/backendAPI";

// eslint-disable-next-line react/prop-types
export default function AdminGame({ isOpen }) {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const [gamesList, setGamesList] = useState([]);
  const [search, setSearch] = useState("");

  const getAllGames = () => {
    backendAPI
      .get("/api/games")
      .then((response) => {
        setGamesList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        align="center"
        my="2rem"
        w="60vw"
        maxWidth={{ base: "60vw", md: "682px" }}
      >
        <InputGroup>
          <InputLeftElement
            mx="1rem"
            height="-webkit-fill-available"
            paddingX="10px"
            pointerEvents="none"
          >
            <IconButton
              size="lg"
              variant="unstyled"
              color="gray.500"
              aria-label="Search database"
              icon={<Search2Icon />}
            />
          </InputLeftElement>
          <Input
            placeholder="Rechercher un jeu "
            fontSize="2xl"
            textAlign={["left"]}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            height="50px"
            // pr="10rem"
            mx="1rem"
          />
        </InputGroup>
      </Flex>
      {gamesList.length !== 0 && search !== "" && (
        <List
          bg="white"
          mx="1rem"
          mb="1rem"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 200px 20px, rgba(0, 0, 0, 0.3) 0px 100px 60px 20px;"
          overflow="hidden"
          minW="250px"
        >
          <ListItem
            className="scrolling"
            height="40vh"
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
            <Flex direction="column" gap="10px" w="-webkit-fill-available">
              {gamesList.map(
                (game) =>
                  game.title.includes(search) && (
                    <>
                      <Button
                        _hover={{
                          color: "teal.500",
                          bgColor: "gray.100",
                        }}
                        direction="row"
                        p={5}
                        w="100%"
                        align="center"
                        mb="10px"
                        h="fit-content"
                        onClick={() => onModalOpen()}
                      >
                        <Image
                          className="movie-img-searchbar"
                          src={game.picture}
                          alt="Movie poster"
                          style={{
                            maxHeight: "8vh",
                            borderRadius: "8px",
                          }}
                        />
                        <Flex
                          pl="20px"
                          justifyContent="space-between"
                          width="100%"
                          alignItems="center"
                        >
                          <Flex direction="column" alignItems="flex-start">
                            <Text
                              fontSize={{ sm: "xl", md: "'xl", base: "2xl" }}
                              align="left"
                            >
                              {game.title}
                            </Text>
                          </Flex>
                        </Flex>
                      </Button>
                      <ModalFindGame
                        game={game}
                        isOpen={isModalOpen}
                        onOpen={onModalOpen}
                        onClose={onModalClose}
                      />
                    </>
                  )
              )}
            </Flex>
          </ListItem>
        </List>
      )}
    </Collapse>
  );
}
