import { Flex, Select, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import MiniCard from "../GamesCards/MiniCard";

import CurrentGameContext from "../../contexts/GamesContext";

export default function Filters() {
  const { games } = useContext(CurrentGameContext);

  const [choosenValueCategory, setChoosenValueCategory] = useState("");
  const [choosenValuePlayers, setChoosenValuePlayers] = useState("");
  const [choosenValueAge, setChoosenValueAge] = useState("");
  const [choosenValueDuration, setChoosenValueDuration] = useState("");

  const handleChangeCategory = (e) => {
    setChoosenValueCategory(e.target.value);
  };
  const handleChangePlayers = (e) => {
    setChoosenValuePlayers(e.target.value);
  };
  const handleChangeAge = (e) => {
    setChoosenValueAge(e.target.value);
  };
  const handleChangeDuration = (e) => {
    setChoosenValueDuration(e.target.value);
  };

  const resetFilter = () => {
    setChoosenValueCategory("");
    setChoosenValuePlayers("");
    setChoosenValueAge("");
    setChoosenValueDuration("");
  };

  return (
    <Flex
      mx="auto"
      p="1rem"
      flexDir="column"
      w={{ base: "100%", lg: "75%" }}
      gap="10"
      boxShadow="2xl"
      borderRadius="20px"
    >
      <Flex
        justifyContent="left"
        columnGap="2"
        rowGap="2"
        flexWrap="wrap"
        h="fit-content"
        w="fit-content"
      >
        <Select
          placeholder="Catégories"
          bgColor="white"
          w="fit-content"
          value={choosenValueCategory}
          onChange={handleChangeCategory}
        >
          <option value="Casse-Tête">Casse-Tête</option>
          <option value="Escape Game">Escape Game</option>
          <option value="Jeu À Boire">Jeu À Boire</option>
          <option value="Jeu Abstrait">Jeu Abstrait</option>
          <option value="Jeu Audio">Jeu Audio</option>
          <option value="Jeu D'adresse">Jeu D'adresse</option>
          <option value="Jeu D'Ambiance">Jeu D'Ambiance</option>
          <option value="Jeu D'association">Jeu D'association</option>
          <option value="Jeu D'enquête">Jeu D'enquête</option>
          <option value="Jeu D'éveil">Jeu D'éveil</option>
          <option value="Jeu D'éveil">Jeu D'éveil</option>
          <option value="Jeu De Cartes">Jeu De Cartes</option>
          <option value="Jeu De Cartes À Jouer">Jeu De Cartes À Jouer</option>
          <option value="Jeu De Cartes Evolutif">Jeu De Cartes Evolutif</option>
          <option value="Jeu De Connaissances">Jeu De Connaissances</option>
          <option value="Jeu De Construction">Jeu De Construction</option>
          <option value="Jeu De Dés">Jeu De Dés</option>
          <option value="Jeu De Dominos">Jeu De Dominos</option>
          <option value="Jeu De Figurines">Jeu De Figurines</option>
          <option value="Jeu De Lettres">Jeu De Lettres</option>
          <option value="Jeu De Loto">Jeu De Loto</option>
          <option value="Jeu De Manipulation">Jeu De Manipulation</option>
          <option value="Jeu De Pions">Jeu De Pions</option>
          <option value="Jeu De Plateau">Jeu De Plateau</option>
          <option value="Jeu De Plein-Air">Jeu De Plein-Air</option>
          <option value="Jeu De Rôle">Jeu De Rôle</option>
          <option value="Jeu De Tuiles">Jeu De Tuiles</option>
          <option value="Jeu Éducatif">Jeu Éducatif</option>
          <option value="Jeu Électronique">Jeu Électronique</option>
          <option value="Jeu En Bois">Jeu En Bois</option>
          <option value="Murder Party">Murder Party</option>
          <option value="Print & Play">Print & Play</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Wargame">Wargame</option>
        </Select>
        <Select
          bgColor="white"
          placeholder="Nombres de joueurs"
          w="fit-content"
          value={choosenValuePlayers}
          onChange={handleChangePlayers}
        >
          <option value="1-2">1 - 2</option>
          <option value="1-3">1 - 3</option>
          <option value="1-4">1 - 4</option>
          <option value="1-5">1 - 5</option>
          <option value="1-6">1 - 6</option>
          <option value="2-3">2 - 3</option>
          <option value="2-4">2 - 4</option>
          <option value="2-5">2 - 5</option>
          <option value="2-6">2 - 6</option>
          <option value="3-4">3 - 4</option>
          <option value="3-5">3 - 5</option>
          <option value="3-6">3 - 6</option>
        </Select>
        <Select
          placeholder="Ages"
          bgColor="white"
          w="fit-content"
          value={choosenValueAge}
          onChange={handleChangeAge}
        >
          <option value="1+">1+</option>
          <option value="2+">2+</option>
          <option value="4+">4+</option>
          <option value="6+">6+</option>
          <option value="8+">8+</option>
          <option value="10+">10+</option>
          <option value="12+">12+</option>
          <option value="12+">12+</option>
          <option value="14+">14+</option>
          <option value="16+">16+</option>
          <option value="18+">18+</option>
        </Select>
        <Select
          placeholder="Durée"
          bgColor="white"
          w="fit-content"
          value={choosenValueDuration}
          onChange={handleChangeDuration}
        >
          <option value="0-15">0 - 15</option>
          <option value="0-30">0 - 30</option>
          <option value="0-60">0 - 60</option>
          <option value="0-120">0 - 120</option>
          <option value="0-180">0 - 180</option>
          <option value="30-60">30 - 60</option>
          <option value="30-120">30 - 120</option>
          <option value="30-180">30 - 180</option>
          <option value="60-120">60 - 120</option>
          <option value="60-180">60 - 180</option>
        </Select>
        <Button
          onClick={resetFilter}
          bg="none"
          border="2px solid"
          borderColor="#4F3521"
          _hover={{ bgColor: "#4F3521", color: "white" }}
        >
          Retirer les filtres
        </Button>
      </Flex>
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
        {games &&
          games
            .filter((data) => {
              if (
                !choosenValueCategory &&
                !choosenValuePlayers &&
                !choosenValueAge &&
                !choosenValueDuration
              ) {
                return [data];
              }
              if (choosenValueCategory) {
                return data.category.includes(choosenValueCategory);
              }
              if (choosenValuePlayers) {
                return data.players.includes(choosenValuePlayers);
              }
              if (choosenValueAge) {
                return data.age.includes(choosenValueAge);
              }
              if (choosenValueDuration) {
                return data.duration.includes(choosenValueDuration);
              }
              return data;
            })
            .map((game) => <MiniCard game={game} />)}
      </Flex>
    </Flex>
  );
}
