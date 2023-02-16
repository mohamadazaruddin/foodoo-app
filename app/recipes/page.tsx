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

export default function page() {
  const recipecardDetail = [
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 5,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 2,
    },

    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 1,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
  ];
  return (
    <Box w="full" h="full" p="45px">
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
        <Flex>
          <Button
            variant="outline"
            mr="8px"
            color="#db3529"
            bg="#fff"
            borderColor="#db3529"
          >
            log in
          </Button>
          <Button variant="solid" bgColor="#db3529" color="#fff" ml="8px">
            Create an Account
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
