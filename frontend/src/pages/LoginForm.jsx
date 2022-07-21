import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  Input,
  Divider,
  Flex,
  useToast,
} from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";

import CurrentUserContext from "../contexts/UserContext";

import Header from "../components/Header";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { setUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    if (loginEmail && loginPassword) {
      backendAPI
        .post("/api/auth/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((response) => {
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          if (response) {
            toast({
              title: "Vous êtes bien connecté(e).",
              description: "Content de vous revoir !",
              status: "success",
              duration: 7000,
              position: "bottom-right",
              isClosable: true,
            });
            if (response.status === 200) {
              window.localStorage.setItem("isUserLoggedIn", true);
            }
          }
          navigate("/");
        })
        .catch((error) => {
          if (error) {
            toast({
              title: "Une erreur est survenue lors de la connexion.",
              description: `${error.response.data.message}`,
              status: "error",
              duration: 7000,
              position: "bottom-right",
              isClosable: true,
            });
          }
          console.warn(error);
        });
    }
  };
  return (
    <Box bgColor="#FFFDF8" h="100vh">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Flex
          bgColor="white"
          minW="15vw"
          minH={{ base: "15vh", md: "100vh" }}
          gap="20px"
          flexDir="column"
        >
          <Header />
        </Flex>{" "}
        <Flex
          className="loginForm"
          bgColor="white"
          maxWidth={{ base: "80vw", md: "482px" }}
          m={{ base: "10%", md: "auto" }}
          alignItems="center"
          boxShadow="2xl"
          borderRadius="25px"
          padding={{ base: "0", md: "20px", lg: "25px" }}
        >
          <Stack
            className="loginConnexion"
            spacing={12}
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "100vw", md: "482px" }}
            margin={{ base: "20px", md: "auto" }}
          >
            <Text
              textAlign="center"
              fontSize="2xl"
              fontWeight="700"
              color="#4F3521"
            >
              Connectez vous à votre compte
            </Text>
            <FormControl>
              <Input
                type="text"
                id="loginEmail"
                name="Pseudo ou Email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="loginPassword"
                name="Mot de passe"
                placeholder="Mot de passe"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </FormControl>
            <Button
              alignSelf="center"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="#4F3521"
              type="button"
              onClick={handleSubmit}
            >
              Se connecter
            </Button>
            <Divider />
            <Link to="/register">
              <Button
                padding="10px"
                w="100%"
                fontWeight="500"
                bgColor="transparent"
                borderRadius="4px"
                color="black"
                border="2px solid"
                borderColor="#4F3521"
                _hover={{ bgColor: "#4F3521", color: "white" }}
              >
                Pas encore inscrit ?
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
