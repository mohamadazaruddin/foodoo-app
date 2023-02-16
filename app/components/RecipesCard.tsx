"use client";
import {
  Box,
  Text,
  Badge,
  Image,
  Flex,
  Divider,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import { MeatIcon } from "./Icons";
import React from "react";

export default function RecipesCard(props: { cardData: any }) {
  const { cardData } = props;
  const repeatStarIcon = (num: number) => {
    return (
      <>
        {Array.from(Array(5), (e, i) => {
          let myColor = num > i ? "#db3529" : "#00000047";
          return <StarIcon mr="8px" color={myColor} key={i} />;
        })}
      </>
    );
  };
  return (
    <Box w="full">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {cardData.map((item: any, i: number) => (
          <GridItem
            key={i}
            mt="45px"
            borderRadius="12px"
            boxShadow="0px 0px 8px #db352912"
          >
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
              <Text fontWeight="bold">{item.title}</Text>
              <Badge colorScheme="red">{item.state}</Badge>
              <Flex justifyContent="space-around" mt="20px">
                <Box>
                  <Text fontWeight="600" fontSize="18px">
                    {item.mineral}
                  </Text>
                  <Text color="#00000061" fontWeight="600" fontSize="14px">
                    Min
                  </Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box>
                  <Text fontWeight="600" fontSize="18px">
                    {item.kcal}
                  </Text>
                  <Text color="#00000061" fontWeight="600" fontSize="14px">
                    kcal
                  </Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box>
                  <Flex justifyContent="center">
                    <MeatIcon />
                  </Flex>
                  <Text color="#00000061" fontWeight="600" fontSize="14px">
                    {" "}
                    {item.category}
                  </Text>
                </Box>
              </Flex>
              <Box mt="8px">{repeatStarIcon(item.rating)}</Box>
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
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
