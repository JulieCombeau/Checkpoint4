/* eslint-disable react/prop-types */
import { Box, Flex, Text, Tag, Link } from "@chakra-ui/react";

import { GiSandsOfTime, GiTabletopPlayers } from "react-icons/gi";
import { MdOutlineCategory, MdOutlineFamilyRestroom } from "react-icons/md";

export default function MiniCard({ game }) {
  return (
    <Flex
      bgColor="white"
      direction={{ base: "column" }}
      justify="center"
      maxH="250px"
      w="200px"
      boxShadow="2xl"
      borderRadius="20px"
    >
      <Link href={`/details/${game.id}`}>
        <Box
          mb="0.5rem"
          position="relative"
          borderTopRadius="20px"
          bgImage={game.picture}
          h="150px"
          bgSize="cover"
        />
      </Link>
      <Flex
        justifyContent="center"
        columnGap="1"
        rowGap="2"
        flexWrap="wrap"
        h="fit-content"
        w="fit-content"
      >
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white" gap="2">
          <GiTabletopPlayers />
          <Text>{game.players}</Text>
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white" gap="2">
          <MdOutlineFamilyRestroom />
          <Text>{game.age}</Text>
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white" gap="2">
          <GiSandsOfTime />
          <Text>{game.duration}</Text>
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white" gap="2">
          <MdOutlineCategory />
          <Text>{game.category}</Text>
        </Tag>
      </Flex>
      <Flex
        flexDirection="column"
        justify="space-between"
        h="100%"
        alignItems="center"
        my="0.5rem"
      >
        <Flex
          justify="space-between"
          gap="10px"
          direction={{
            base: "row",
            md: "column",
            lg: "row",
            xl: "column",
            "2xl": "row",
          }}
          mb="auto"
        >
          <Flex direction="column" alignItems="center">
            <Text
              color="#4F3521"
              fontSize="xl"
              mb="5px"
              fontWeight="bold"
              textAlign="center"
              noOfLines={1}
            >
              {game.title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
