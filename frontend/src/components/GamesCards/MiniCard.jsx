/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
// Chakra imports
import { Box, Flex, Image, Text, Tag } from "@chakra-ui/react";

import logo from "../../assets/logo.svg";

export default function MiniCard() {
  return (
    <Flex direction={{ base: "column" }} justify="center" w="180px">
      <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
        <Image
          src={logo}
          w={{ base: "100%", "3xl": "100%" }}
          h={{ base: "100%", "3xl": "100%" }}
          borderRadius="20px"
        />
      </Box>
      <Flex
        flexDirection="column"
        justify="space-between"
        h="100%"
        alignItems="center"
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
              color="blue"
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
            <Text
              color="secondaryGray.600"
              fontSize={{
                base: "sm",
              }}
              fontWeight="400"
            >
              TTTRE STATUS
            </Text>
          </Flex>
        </Flex>
        <Flex gap="5px">
          <Tag size="sm" variant="subtle" bgColor="black" color="white">
            NOM DU TAG
          </Tag>
        </Flex>
      </Flex>
    </Flex>
  );
}
