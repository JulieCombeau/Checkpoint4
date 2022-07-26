/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
  Flex,
  Image,
  Tag,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import { GiSandsOfTime, GiTabletopPlayers } from "react-icons/gi";
import { MdOutlineCategory, MdOutlineFamilyRestroom } from "react-icons/md";
import backendAPI from "../../../services/backendAPI";

import CollapseUpdatedGame from "./CollapseUpdatedGame";

// eslint-disable-next-line react/prop-types
export default function ModalFindGame({
  isOpen,
  onClose,
  gameId,
  updated,
  setUpdated,
}) {
  const toast = useToast();
  const { isOpen: isCollapseOpen, onToggle: onCollapseToggle } =
    useDisclosure();

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
  }, [gameId]);

  const deleteGame = (e) => {
    e.preventDefault();
    backendAPI
      .delete(`/api/games/${gameId}`)
      .then((response) => {
        if (response) {
          toast({
            title: "Le jeu a bien été supprimé.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          setUpdated(!updated);
          onClose();
        }
      })
      .catch((error) => {
        if (error) {
          toast({
            title: "Erreur dans la suppression du jeu",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        console.warn(error);
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informations du jeu</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <Flex
            direction={{ base: "column", md: "row" }}
            p={5}
            w="100%"
            align="center"
            mb="10px"
            h="fit-content"
          >
            <Image
              src={game.picture}
              alt="game picture"
              style={{
                maxHeight: "30vh",
                maxWidth: "200px",
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
            >
              <Text fontSize="3xl">{game.title}</Text>
              <Flex
                justifyContent="center"
                columnGap="1"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <GiTabletopPlayers />
                  <Text>{game.players}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <MdOutlineFamilyRestroom />
                  <Text>{game.age}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <GiSandsOfTime />
                  <Text>{game.duration}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <MdOutlineCategory />
                  <Text>{game.category}</Text>
                </Tag>
              </Flex>
              <Text noOfLines={4}>{game.description}</Text>
              <Flex gap="8">
                <Button
                  mt="2rem"
                  alignSelf="center"
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  borderColor="#4F3521"
                  type="button"
                  onClick={() => onCollapseToggle()}
                >
                  Modifier
                </Button>
                <Button
                  mt="2rem"
                  alignSelf="center"
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  borderColor="#4F3521"
                  type="button"
                  onClick={deleteGame}
                >
                  Supprimer le jeu
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <CollapseUpdatedGame
            isOpen={isCollapseOpen}
            onToggle={onCollapseToggle}
            game={game}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

ModalFindGame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
