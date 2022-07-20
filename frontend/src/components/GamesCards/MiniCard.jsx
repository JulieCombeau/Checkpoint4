/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
// Chakra imports
import { Box, Flex, Image, Text, Tag, Link } from "@chakra-ui/react";

import logo from "../../assets/logo.svg";

export default function MiniCard() {
  return (
    <Flex
      bgColor="white"
      direction={{ base: "column" }}
      justify="center"
      w="180px"
      boxShadow="2xl"
      borderRadius="20px"
    >
      <Link href="/détails/:gameId">
        <Box mb="0.5rem" position="relative" borderTopRadius="20px">
          <Image
            src={logo}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
          />
        </Box>
      </Link>
      <Flex
        justifyContent="center"
        columnGap="1"
        rowGap="2"
        flexWrap="wrap"
        h="fit-content"
        w="fit-content"
      >
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white">
          Nb joueurs
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white">
          Age
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white">
          Durée
        </Tag>
        <Tag size="sm" variant="subtle" bgColor="#A07B5E" color="white">
          Catégorie
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
              fontSize={{
                base: "xl",
                md: "lg",
                lg: "lg",
                xl: "lg",
                "2xl": "md",
                "3xl": "lg",
              }}
              mb="5px"
              fontWeight="bold"
              textAlign="center"
              noOfLines={1}
            >
              TITRE JEUX
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
