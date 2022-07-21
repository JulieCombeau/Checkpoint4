/* eslint-disable react/prop-types */
import { Flex, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import backendAPI from "../../services/backendAPI";

export default function Editors({ game }) {
  const colors = {
    Philibert: "yellow.700",
    Playin: "blue.400",
    "Palais de Midgard": "blue.600",
    Fnac: "orange.200",
    "Mille & un jeux": "orange.900",
    Cultura: "yellow.500",
    "Esprit Jeu": "orange.700",
    Agorajeux: "blue.800",
    "Le Passe Temps": "yellow.900",
    Ludum: "blue.900",
    Okkazeo: "orange.500",
  };

  if (!game) {
    return null;
  }
  const [editors, setEditors] = useState([]);

  const getAllEditorsByGame = () => {
    backendAPI
      .get(`/api/games/${game.id}/editors`)
      .then((response) => {
        setEditors(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllEditorsByGame();
  }, [game.id]);

  return (
    <Flex
      my="2rem"
      flexDir="column"
      maxH="30vh"
      h="30vh"
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
      <Flex
        justifyContent="center"
        columnGap="3"
        rowGap="2"
        flexWrap="wrap"
        h="fit-content"
        w="fit-content"
        alignSelf="center"
      >
        {editors &&
          editors.map((editor) => (
            <Button
              w="40%"
              h="90px"
              variant="subtle"
              bgColor={colors[editor.fk_editors_id.name]}
              color="white"
              gap="2"
            >
              <Text fontSize={{ base: "md", md: "xl" }}>
                {editor.fk_editors_id.name}
              </Text>
            </Button>
          ))}
      </Flex>
    </Flex>
  );
}
