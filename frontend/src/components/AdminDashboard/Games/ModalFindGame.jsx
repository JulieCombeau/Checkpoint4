/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
  Flex,
  Image,
  Tag,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { GiSandsOfTime, GiTabletopPlayers } from "react-icons/gi";
import { MdOutlineCategory, MdOutlineFamilyRestroom } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function ModalFindGame({ isOpen, onClose, game }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informations du jeu</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <Flex
            direction="row"
            p={5}
            w="100%"
            align="center"
            mb="10px"
            h="fit-content"
          >
            <Image
              src={game.picture}
              alt="game picture"
              style={{
                maxHeight: "30vh",
                borderRadius: "8px",
              }}
            />
            <Flex
              pl="20px"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
              flexDir="column"
            >
              <Text fontSize="2xl">{game.title}</Text>
              <Flex
                justifyContent="center"
                columnGap="1"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <GiTabletopPlayers />
                  <Text>{game.players}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <MdOutlineFamilyRestroom />
                  <Text>{game.age}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <GiSandsOfTime />
                  <Text>{game.duration}</Text>
                </Tag>
                <Tag
                  size="lg"
                  variant="subtle"
                  bgColor="#A07B5E"
                  color="white"
                  gap="2"
                >
                  <MdOutlineCategory />
                  <Text>{game.category}</Text>
                </Tag>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

ModalFindGame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
