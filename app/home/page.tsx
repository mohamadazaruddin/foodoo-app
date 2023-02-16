"use client";
import {
  Box,
  Heading,
  Text,
  Input,
  Flex,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import RecipesCard from "../components/RecipesCard";
import { Search2Icon } from "@chakra-ui/icons";
import { PlusIcon } from "../components/Icons";

export default function page() {
  const recipecardDetail = [
    {
      id: 1,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 2,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 5,
    },
    {
      id: 3,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 2,
    },

    {
      id: 4,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 5,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 6,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 1,
    },
    {
      id: 7,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 8,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 9,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 10,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 11,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 12,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      id: 13,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
  ];
  return (
    <Box
      w="full"
      h="100vh"
      p="45px"
      overflowY="auto"
      className="cardscontainer"
    >
      <Flex>
        <Box pos="relative">
          <Search2Icon
            pos="absolute"
            top="50%"
            transform="translateY(-50%)"
            color="#db3529"
          />
          <Input
            placeholder="Enter you search request"
            border="none"
            borderBottom="1px solid #0000001a"
            color="#db3529"
            px="25px"
            borderRadius={0}
            _focus={{ border: "none" }}
            _focusVisible={{
              boxShadow: "none",
              borderBottom: "1px solid #db3529",
            }}
            w="350px"
          />
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <Button mr="8px" bgColor="#db3529" color="#fff" variant="solid">
            <Box as="span" mr="8px">
              <PlusIcon />
            </Box>{" "}
            Add Recipe
          </Button>
          <Button
            variant="outline"
            borderColor="#db3529"
            color="#db3529"
            ml="8px"
          >
            Log out
          </Button>
        </Flex>
      </Flex>
      <Flex alignItems="center" mt="20px">
        <Image src="./recipe.jpg" w="50px" h="50px" borderRadius="50%" />
        <Box ml="10px">
          <Heading>Only the best recipes !</Heading>
          <Text>today's best recipe for you</Text>
        </Box>
      </Flex>
      <Box mt="20px">
        <RecipesCard cardData={recipecardDetail} />
      </Box>
    </Box>
  );
}
