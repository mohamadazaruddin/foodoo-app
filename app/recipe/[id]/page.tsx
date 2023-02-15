"use client";
import { Flex, Badge, Button, Box, Image, Text } from "@chakra-ui/react";

import React from "react";
interface page {
  params: { id: number };
}
export default function page({ params }: page) {
  const recipecardDetail = [
    {
      id: 1,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 2,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 3,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },

    {
      id: 4,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 5,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 6,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 7,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 8,
      title: "chicken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
  ];
  return (
    <Box p="40px">
      <Box w="250px">
        <Box
          p="20px"
          backgroundColor="#ffffff"
          textAlign="center"
          borderRadius="12px"
        >
          <Flex justifyContent="center" mt="-45px">
            <Image
              h="50px"
              w="50px"
              borderRadius="50%"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgosXm-0FosJSetUduyPKRpDH1Bs8Q3NI6g&usqp=CAU"
              }
            />
          </Flex>
          <Text fontWeight="bold">{recipecardDetail[params.id].title}</Text>
          <Badge colorScheme="red">{recipecardDetail[params.id].state}</Badge>
          <Flex justifyContent="space-around" mt="20px">
            <Box>
              {recipecardDetail[params.id].mineral}
              <Text>Min</Text>
            </Box>
            <Box w="2px" background="#0707070d"></Box>
            <Box>
              {recipecardDetail[params.id].kcal}
              <Text>kcal</Text>
            </Box>
            <Box w="2px" background="#0707070d"></Box>
            <Box>
              {recipecardDetail[params.id].category}
              <Text>type</Text>
            </Box>
          </Flex>
        </Box>
        <Button
          variant="solid"
          bgColor="#db3529"
          borderRadius={0}
          borderBottomLeftRadius="12px"
          borderBottomRightRadius="12px"
          color="#fff"
          w="full"
        >
          Start Cooking
        </Button>
      </Box>
    </Box>
  );
}
