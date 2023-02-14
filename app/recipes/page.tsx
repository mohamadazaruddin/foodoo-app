"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import RecipesCard from "../components/RecipesCard";

export default function page() {
  const recipecardDetail = [
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },

    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
  ];
  return (
    <Box w="full" h="full" p="40px">
      <Heading>Only the best recipes !</Heading>
      <Text>today's best recipe for you</Text>
      <Box mt="45px">
        <RecipesCard cardData={recipecardDetail} />
      </Box>
    </Box>
  );
}
