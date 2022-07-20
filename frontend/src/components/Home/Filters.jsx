import { Flex, Select } from "@chakra-ui/react";

export default function Filters() {
  return (
    <Flex
      justifyContent="center"
      columnGap="3"
      rowGap="2"
      flexWrap="wrap"
      h="fit-content"
      w="fit-content"
    >
      <Select
        placeholder="Nombres de joueurs"
        variant="filled"
        w="fit-content"
        //   value={choosenValueAgency}
        //   onChange={handleChangeAgency}
        marginRight="35px"
      >
        <option value="Paris">Paris</option>
        <option value="Tours">Tours</option>
        <option value="Lyon">Lyon</option>
        <option value="Bordeaux">Bordeaux</option>
        <option value="Bayonne">Bayonne</option>
      </Select>
      <Select
        placeholder="Ages"
        variant="filled"
        w="fit-content"
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
        marginRight="35px"
      >
        <option value="Javascript">Javascript</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Docker">Docker</option>
        <option value="Github">Github</option>
        <option value="Angular">Angular</option>
        <option value="React">React</option>
        <option value="VueJS">VueJS</option>
        <option value="Figma">Figma</option>
        <option value="Suite Adobe">Suite Adobe</option>
        <option value="NodeJS">NodeJS</option>
        <option value="Express">Express</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="React Native">React Native</option>
        <option value="flutter">flutter</option>
        <option value="Dart">Dart</option>
      </Select>
      <Select
        placeholder="Durée"
        variant="filled"
        w="fit-content"
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
        marginRight="35px"
      >
        <option value="Javascript">Javascript</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Docker">Docker</option>
        <option value="Github">Github</option>
        <option value="Angular">Angular</option>
        <option value="React">React</option>
        <option value="VueJS">VueJS</option>
        <option value="Figma">Figma</option>
        <option value="Suite Adobe">Suite Adobe</option>
        <option value="NodeJS">NodeJS</option>
        <option value="Express">Express</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="React Native">React Native</option>
        <option value="flutter">flutter</option>
        <option value="Dart">Dart</option>
      </Select>
      <Select
        placeholder="Catégories"
        variant="filled"
        w="fit-content"
        //   value={choosenValueSkills}
        //   onChange={handleChangeSkills}
        marginRight="35px"
      >
        <option value="Javascript">Javascript</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Docker">Docker</option>
        <option value="Github">Github</option>
        <option value="Angular">Angular</option>
        <option value="React">React</option>
        <option value="VueJS">VueJS</option>
        <option value="Figma">Figma</option>
        <option value="Suite Adobe">Suite Adobe</option>
        <option value="NodeJS">NodeJS</option>
        <option value="Express">Express</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="React Native">React Native</option>
        <option value="flutter">flutter</option>
        <option value="Dart">Dart</option>
      </Select>
    </Flex>
  );
}
