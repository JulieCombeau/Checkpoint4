/* eslint-disable no-unused-expressions */
import { Button, Flex, useDisclosure } from "@chakra-ui/react";

import CollapseFindGame from "./CollapseFindGame";
import CollapseCreateGame from "./CollapseCreateGame";

export default function AdminGame() {
  const { isOpen: isOpenFindGame, onToggle: onToggleFindGame } =
    useDisclosure();
  const { isOpen: isOpenCreateGame, onToggle: onToggleCreateGame } =
    useDisclosure();

  const findGame = () => {
    onToggleFindGame();
    isOpenCreateGame && onToggleCreateGame();
  };

  const createGame = () => {
    onToggleCreateGame();
    isOpenFindGame && onToggleFindGame();
  };

  return (
    <Flex flexDir={{ base: "column", md: "row" }}>
      <Flex
        flexDir="column"
        className="loginForm"
        bgColor="white"
        w="80vw"
        maxWidth={{ base: "80vw", md: "682px" }}
        m={{ base: "10%", md: "auto" }}
        alignItems="center"
        boxShadow="2xl"
        borderRadius="25px"
        padding="25px"
      >
        <Flex gap="8">
          <Button
            mt="2rem"
            alignSelf="center"
            size="md"
            height="48px"
            width="fit-content"
            border="2px"
            borderColor="#4F3521"
            type="button"
            onClick={findGame}
          >
            Trouver un jeu
          </Button>
          <Button
            mt="2rem"
            alignSelf="center"
            size="md"
            height="48px"
            width="fit-content"
            border="2px"
            borderColor="#4F3521"
            type="button"
            onClick={createGame}
          >
            Ajouter un jeu
          </Button>
        </Flex>
        <CollapseFindGame isOpen={isOpenFindGame} />
        <CollapseCreateGame
          isOpen={isOpenCreateGame}
          onToggle={onToggleCreateGame}
        />
      </Flex>
    </Flex>
  );
}
