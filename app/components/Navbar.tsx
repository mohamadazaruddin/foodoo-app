"use client";
import { Box, Heading } from "@chakra-ui/react";
import {
  StarIcon,
  DragHandleIcon,
  AtSignIcon,
  CalendarIcon,
} from "@chakra-ui/icons";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import UserProfile from "./UserProfile";

export default function navbar() {
  const router = useRouter();
  return (
    <Box
      w="200px"
      h="full"
      bgColor="#fff"
      py="20px"
      textAlign="center"
      boxShadow="0px 0px 8px 11px #00000005"
    >
      <Heading
        onClick={() => {
          router.push("/home");
        }}
      >
        Foodoo
      </Heading>
      <Box>
        <UserProfile />
      </Box>
      <Box mt="25px" textAlign="start">
        <UnorderedList listStyleType="none" fontWeight="semibold" m="0" p="0">
          <ListItem
            role="group"
            onClick={() => {
              router.push("/home");
            }}
            display="flex"
            bgColor="#db3529"
            color="#fff"
            alignItems="center"
            p="8px"
            cursor="pointer"
            _groupHover={{ bgColor: "#db3529", color: "#fff" }}
            px="20px"
          >
            <DragHandleIcon mr="8px" _groupHover={{ color: "#fff" }} /> recipe
          </ListItem>
          <ListItem
            role="group"
            p="8px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            _hover={{ bgColor: "#db3529", color: "#fff" }}
            px="20px"
            onClick={() => {
              router.push("/favorites");
              console.log("fAV");
            }}
          >
            <StarIcon
              mr="8px"
              color="#db3529"
              _groupHover={{ color: "#fff" }}
            />
            favorites
          </ListItem>
          <ListItem
            role="group"
            p="8px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            _hover={{ bgColor: "#db3529", color: "#fff" }}
            px="20px"
            onClick={() => {
              router.push("/my-recipes");
            }}
          >
            <CalendarIcon
              mr="8px"
              color="#db3529"
              _groupHover={{ color: "#fff" }}
            />
            my-recipes
          </ListItem>
          <ListItem
            role="group"
            p="8px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            _hover={{ bgColor: "#db3529", color: "#fff" }}
            px="20px"
            onClick={() => {
              router.push("/communnity");
            }}
          >
            <AtSignIcon
              mr="8px"
              color="#db3529"
              _groupHover={{ color: "#fff" }}
            />
            communnity
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
