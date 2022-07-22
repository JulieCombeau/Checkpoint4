/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";

export default function Content({ game }) {
  if (!game) {
    return null;
  }
  return (
    <Flex
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
        w="100%"
        my="1rem"
        flexDir="column"
        gap="4"
        textAlign="left"
        p="0.5rem"
      >
        {game.content}
        <Flex />
      </Flex>
    </Flex>
  );
}
