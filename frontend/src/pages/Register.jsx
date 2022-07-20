import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Button,
  FormControl,
  Input,
  Divider,
  Flex,
  useToast,
} from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";
import "../App.css";

import Header from "../components/Header";

export default function Register() {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    backendAPI
      .post("/api/users", {
        firstname: signupFirstname,
        lastname: signupLastname,
        email: signupEmail,
        password: signupPassword,
      })
      .catch((error) => {
        console.warn(error);
        if (error) {
          toast({
            title:
              "Une erreur est survenue lors de la création de votre compte.",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          console.warn(error);
        }
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vous avez bien créez votre compte.",
            description: "Bienvenue chez nous !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
      })
      .then(() => {
        backendAPI
          .post("/api/auth/login", {
            email: signupEmail,
            password: signupPassword,
          })
          .then((newresponse) => {
            if (newresponse.status === 200) {
              window.localStorage.setItem("isUserLoggedIn", true);
            }

            if (newresponse) {
              toast({
                title: "Connexion Réussie",
                description: "Bienvenue sur votre compte !",
                status: "success",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
            }
            navigate("/");
          })
          .catch((error) => {
            if (error) {
              toast({
                title: "Une erreur est survenue lors du login",
                status: "error",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
            }
            console.warn(error);
          });
      });
  };

  return (
    <Box h="100vh" bgColor="#FFFDF8">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Flex
          bgColor="white"
          minW="15vw"
          minH={{ base: "15vh", md: "100vh" }}
          gap="20px"
          flexDir="column"
        >
          <Header />
        </Flex>
        <Flex
          boxShadow="2xl"
          className="signupForm"
          bgColor="white"
          maxWidth={{ base: "100vw", md: "482px" }}
          m={{ base: "10%", md: "auto" }}
          alignItems="center"
          borderRadius="25px"
          padding={{ base: "30px", md: "30px", lg: "40px" }}
        >
          <Stack
            className="noAccount"
            spacing={8}
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "100vw", md: "482px" }}
            margin={{ base: "20px", md: "auto" }}
          >
            <Text
              textAlign="center"
              fontSize="3xl"
              fontWeight="700"
              color="#4F3521"
            >
              Inscription
            </Text>
            <FormControl>
              <Input
                type="text"
                id="signupFirstname"
                name="Prénom"
                placeholder="Prénom"
                value={signupFirstname}
                onChange={(e) => setSignupFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                id="signupLastname"
                name="Nom"
                placeholder="Nom"
                value={signupLastname}
                onChange={(e) => setSignupLastname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                id="signupEmail"
                name="Email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="signupPassword"
                name="Mot de passe"
                placeholder="Mot de passe"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
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
              onClick={() => handleSubmit()}
            >
              S'inscrire
            </Button>
            <Divider />
            <Text textAlign="center">
              Vous avez déjà un compte ?&nbsp;
              <Link to="/login">
                <Text
                  color="#342c50"
                  _hover={{ textDecoration: "none", color: "#4F3521" }}
                >
                  Se connecter
                </Text>
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
