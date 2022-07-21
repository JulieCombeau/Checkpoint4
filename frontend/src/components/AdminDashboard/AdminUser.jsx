/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";

import {
  Collapse,
  HStack,
  Button,
  Select,
  Flex,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import backendAPI from "../../services/backendAPI";

export default function AdminUser() {
  const { isOpen, onToggle } = useDisclosure();
  const [usersList, setUsersList] = useState([]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // axios qui va chercher la liste des services
  const getAllUsers = () => {
    backendAPI
      .get("/api/users")
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // fonction de recherche d'un utilsateur //
  const selectUser = (e) => {
    if (e.target.value === "") {
      setFirstname("");
      setLastname("");
      setEmail("");
    } else {
      backendAPI
        .get(`/api/users/${e.target.value}`)
        .then(
          (res) => (
            setFirstname(res.data.result.firstname),
            setLastname(res.data.result.lastname),
            setEmail(res.data.result.email)
          )
        );
    }
  };

  return (
    <Flex flexDir={{ base: "column", md: "row" }}>
      <Flex
        flexDir="column"
        className="loginForm"
        bgColor="white"
        w="80vw"
        maxWidth={{ base: "80vw", md: "682px" }}
        m={{ base: "10%", md: "auto" }}
        alignItems="center"
        boxShadow="2xl"
        borderRadius="25px"
        padding="25px"
      >
        <HStack
          className="loginConnexion"
          spacing={10}
          maxWidth="682px"
          margin="auto"
        >
          <Select
            border="none"
            type="text"
            id="User"
            name="User"
            fontSize="1rem"
            fontWeight="500"
            color="gray"
            placeholder="Choisir un utilisateur"
            onChange={selectUser}
          >
            {usersList.map((element) => (
              <option value={element.id}>
                {element.firstname} {element.lastname}
              </option>
            ))}
          </Select>
        </HStack>
        <Button
          mt="2rem"
          alignSelf="center"
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="#4F3521"
          type="button"
          onClick={onToggle}
        >
          {isOpen ? "Fermer" : "Trouver"}
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            p="10px"
            mt="4"
            justifyContent="space-around"
            w="fit-content"
            gap="2"
          >
            <Text color="black">{firstname}</Text>
            <Text color="black">
              {lastname || "Veuillez sélectionner un utilisateur"}
            </Text>
            <Text color="black">{email}</Text>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
}
