import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Description from "./Description";
import Content from "./Content";
import Editors from "./Editors";

// eslint-disable-next-line react/prop-types
export default function ButtonGroupProjetNavigation({ game }) {
  return (
    <Tabs variant="solid-rounded" isFitted w="100%" m="0 auto" marginTop="1rem">
      <TabList
        border="1px"
        borderRadius="2xl"
        borderColor="#4F3521"
        variant="solid-rounded"
        p={1}
        _focus={{
          borderColor: "#4F3521",
        }}
      >
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgColor: "#4F3521",
          }}
          isFitted
        >
          Description
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgColor: "#4F3521",
          }}
        >
          Contenu
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgColor: "#4F3521",
          }}
        >
          Vendeurs
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel mt="0.5rem" p="0">
          <Description game={game} />
        </TabPanel>
        <TabPanel mt="0.5rem" p="0">
          <Content game={game} />
        </TabPanel>
        <TabPanel mt="0.5rem" p="0">
          <Editors game={game} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
