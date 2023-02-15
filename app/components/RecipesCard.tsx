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
import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function RecipesCard(props: { cardData: any }) {
  const Router = useRouter();
  const { cardData } = props;
  return (
    <Box w="full">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {cardData.map((item: any, i: number) => (
          <GridItem key={i}>
            <Box
              p="20px"
              backgroundColor="#ffffff"
              textAlign="center"
              borderRadius="12px"
              onClick={() => {
                Router.push(`./recipe/${item.id}`);
              }}
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
                  {item.mineral}
                  <Text>Min</Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box>
                  {item.kcal}
                  <Text>kcal</Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box>
                  {item.category}
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
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
