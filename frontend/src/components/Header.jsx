import { Link, useNavigate } from "react-router-dom";
import { Flex, Button, Image } from "@chakra-ui/react";

import { useContext, useState } from "react";

import backendAPI from "../services/backendAPI";

import CurrentUserContext from "../contexts/UserContext";

import logo from "../assets/logo.svg";

export default function Sidebar() {
  const [isSignUp, setIsSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );
  const { user } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const logout = () => {
    backendAPI
      .get("/api/auth/logout")
      .then(() => {
        localStorage.clear();
        setIsSignUp(undefined);
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <Flex
      minW="16vw"
      maxW={{ base: "100%", md: "150px" }}
      minH={{ base: "7vh", md: "100vh" }}
      gap={{ base: "0", md: "20px" }}
      w="100%"
      alignItems="center"
      flexDir={{ base: "row", md: "column" }}
    >
      <Image src={logo} alt="" w={{ base: "0", md: "100%" }} />
      <Flex
        justifyContent="center"
        m="0.2rem"
        flexWrap="wrap"
        align="center"
        gap={{ base: "2%", md: "140px" }}
        w={{ base: "100%", md: "15vw" }}
        minW="15vw"
        minH={{ base: "7vh", md: "70vh" }}
        flexDir={{ base: "row", md: "column" }}
      >
        <Link to="/">
          <Button
            fontSize={{ base: "sm", md: "md" }}
            padding="10px"
            w="15vw"
            minW="fit-content"
            fontWeight="500"
            bgColor="transparent"
            borderRadius="4px"
            color="black"
            border="2px solid"
            borderColor="#4F3521"
            _hover={{ bgColor: "#4F3521", color: "white" }}
          >
            Accueil
          </Button>
        </Link>
        <Button
          fontSize={{ base: "sm", md: "md" }}
          padding="10px"
          minW="fit-content"
          w="15vw"
          fontWeight="500"
          bgColor="transparent"
          borderRadius="4px"
          color="black"
          border="2px solid"
          borderColor="#4F3521"
          _hover={{ bgColor: "#4F3521", color: "white" }}
        >
          Inspiration
        </Button>
        {isSignUp === true ? (
          <Link to="/register">
            <Button
              fontSize={{ base: "sm", md: "md" }}
              onClick={logout}
              padding="10px"
              minW="fit-content"
              w="15vw"
              fontWeight="500"
              bgColor="transparent"
              borderRadius="4px"
              color="black"
              border="2px solid"
              borderColor="#4F3521"
              _hover={{ bgColor: "#4F3521", color: "white" }}
            >
              Se déconnecter
            </Button>
          </Link>
        ) : (
          <>
            <Link to="/register">
              <Button
                fontSize={{ base: "sm", md: "md" }}
                padding="10px"
                w="15vw"
                minW="fit-content"
                fontWeight="500"
                bgColor="transparent"
                borderRadius="4px"
                color="black"
                border="2px solid"
                borderColor="#4F3521"
                _hover={{ bgColor: "#4F3521", color: "white" }}
              >
                Inscription
              </Button>
            </Link>
            <Link to="/login">
              <Button
                fontSize={{ base: "sm", md: "md" }}
                padding="10px"
                minW="fit-content"
                w="15vw"
                fontWeight="500"
                bgColor="transparent"
                borderRadius="4px"
                color="black"
                border="2px solid"
                borderColor="#4F3521"
                _hover={{ bgColor: "#4F3521", color: "white" }}
              >
                Connexion
              </Button>
            </Link>
          </>
        )}
        {user.user.isAdmin && isSignUp === true && (
          <Link to="/dashboardAdministrator">
            <Button
              fontSize={{ base: "sm", md: "md" }}
              padding="10px"
              minW="fit-content"
              w="15vw"
              fontWeight="500"
              bgColor="transparent"
              borderRadius="4px"
              color="black"
              border="2px solid"
              borderColor="#4F3521"
              _hover={{ bgColor: "#4F3521", color: "white" }}
            >
              Dashboard
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}
