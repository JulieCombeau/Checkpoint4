/* eslint-disable react/prop-types */
/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";

import {
  Collapse,
  Flex,
  Input,
  Button,
  Stack,
  FormControl,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

import backendAPI from "../../../services/backendAPI";

// eslint-disable-next-line react/prop-types
export default function CollapseUpdatedGame({ isOpen, game, onToggle }) {
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [players, setPlayers] = useState("");
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setTitle(game.title);
    setDescription(game.description);
    setContent(game.content);
    setPicture(game.picture);
    setPlayers(game.players);
    setAge(game.age);
    setDuration(game.duration);
    setCategory(game.category);
  }, [isOpen, !isOpen]);

  const updateGame = (e) => {
    e.preventDefault();
    backendAPI
      .put(`/api/games/${game.id}`, {
        title,
        description,
        content,
        picture,
        players,
        age,
        duration,
        category,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vos données ont bien été enregistrées.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        onToggle();
      })
      .catch((error) => {
        if (error) {
          toast({
            title: "Veuillez renseigner tous les champs obligatoires",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        console.warn(error);
      });
  };

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        bgColor="white"
        maxWidth="100vw"
        m="auto"
        alignItems="center"
        borderRadius="25px"
        padding="40px"
        gap="10"
      >
        <Stack
          className="noAccount"
          spacing={8}
          w="100%"
          maxWidth={{ base: "100vw", md: "482px" }}
          margin={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <Input
              type="text"
              id="title"
              name="Title"
              placeholder="Titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              id="players"
              name="players"
              placeholder="Nombres de joueurs"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              id="category"
              name="category"
              placeholder="Catégorie"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Textarea
              type="text"
              id="descripition"
              name="descripition"
              placeholder="Descripition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Stack
          className="noAccount"
          spacing={8}
          w="100%"
          maxWidth={{ base: "100vw", md: "482px" }}
          margin={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <Input
              type="text"
              id="age"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              id="duration"
              name="duration"
              placeholder="Durée"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              id="picture"
              name="picture"
              placeholder="Image"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Textarea
              type="text"
              id="content"
              name="content"
              placeholder="Contenu"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <Button
          size="md"
          height="48px"
          width="fit-content"
          border="2px"
          borderColor="#4F3521"
          type="button"
          onClick={updateGame}
        >
          Enregister les modifications
        </Button>
      </Flex>
    </Collapse>
  );
}

CollapseUpdatedGame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
