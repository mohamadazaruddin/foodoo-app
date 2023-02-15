"use client";
import { Box, Heading } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function navbar() {
  const router = useRouter();
  return (
    <Box w="200px" h="full" bgColor="#fff" p="20px">
      <Heading
        onClick={() => {
          router.push("/home");
        }}
      >
        Foodoo
      </Heading>
      <Box>
        <UnorderedList listStyleType="none">
          <ListItem
            onClick={() => {
              router.push("/home");
            }}
          >
            recipe
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => {
              router.push("/favorites");
              console.log("fAV");
            }}
          >
            favorites
          </ListItem>
          <ListItem
            onClick={() => {
              router.push("/my-recipes");
            }}
          >
            my-recipes
          </ListItem>
          <ListItem
            onClick={() => {
              router.push("/communnity");
            }}
          >
            communnity
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
