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
      <Heading>Foodoo</Heading>
      <Box>
        <UnorderedList listStyleType="none">
          <ListItem
            onClick={() => {
              router.push("/recipes");
            }}
          >
            recipe
          </ListItem>
          <ListItem>favorites</ListItem>
          <ListItem>course</ListItem>
          <ListItem>communnity</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
