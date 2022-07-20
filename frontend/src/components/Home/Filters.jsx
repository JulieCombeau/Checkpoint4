import { Flex, Select } from "@chakra-ui/react";

export default function Filters() {
  return (
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
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
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
        <option value="Jeu De Figurines"> eu De Figurines</option>
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
        //   value={choosenValueAgency}
        //   onChange={handleChangeAgency}
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
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
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
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
      >
        <option value="0-15">0 - 15</option>
        <option value="0-30">0 - 30</option>
        <option value="0-60">0 - 60</option>
        <option value="0-120">0 - 120</option>
        <option value="0-180">0 - 180</option>
        <option value="60-120">60 - 120</option>
        <option value="60-180">60 - 180</option>
      </Select>
    </Flex>
  );
}
