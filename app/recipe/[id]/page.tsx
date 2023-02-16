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
      title: "chicvvcvcbvvvcvvken soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: "4",
    },
    {
      id: 8,
      title: "chickvbbbben soup",
      state: "intermediate",
      mineral: "25",
      kcal: "95",
      category: "meat",
      rating: 4,
    },
  ];
  const val = Number(params.id) + 1;
  return (
    <Box p="40px">
      <Box w="full">
        <Box p="20px" backgroundColor="#ffffff" borderRadius="12px">
          <Flex>
            <Box p="20px">
              <Image
                h="200px"
                w="250px"
                borderRadius="50%"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgosXm-0FosJSetUduyPKRpDH1Bs8Q3NI6g&usqp=CAU"
                }
              />
            </Box>
            <Box p="20px" w="full">
              <Text fontWeight="bold" fontSize="40px">
                {recipecardDetail[val]?.title}
              </Text>
              <Badge colorScheme="red">{recipecardDetail[val]?.state}</Badge>
              <Flex>
                <Box
                  fontWeight="600"
                  fontSize="24px"
                  mr="16px"
                  textAlign="center"
                >
                  {recipecardDetail[val]?.mineral}
                  <Text color="#00000061" fontWeight="600" fontSize="18px">
                    Min
                  </Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box fontWeight="600" fontSize="24px" mx="16px">
                  {recipecardDetail[val]?.kcal}
                  <Text color="#00000061" fontWeight="600" fontSize="18px">
                    kcal
                  </Text>
                </Box>
                <Box w="2px" background="#0707070d"></Box>
                <Box fontWeight="600" fontSize="24px" ml="16px">
                  {recipecardDetail[val]?.category}
                  <Text color="#00000061" fontWeight="600" fontSize="18px">
                    type
                  </Text>
                </Box>
              </Flex>
              <Box mt="20px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis sed eaque vero repellendus sit, nam labore,
                praesentium illo sequi harum eligendi dignissimos voluptate
                earum aspernatur ducimus ullam animi dicta quas.lorer Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi illo
                laudantium inventore cupiditate voluptas, pariatur quibusdam quo
                est architecto iste, illum repudiandae fuga modi laboriosam
                reprehenderit perspiciatis, at eius minus? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Perspiciatis sed eaque vero
                repellendus sit, nam labore, praesentium illo sequi harum
                eligendi dignissimos voluptate earum aspernatur ducimus ullam
                animi dicta quas.lorer Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi illo laudantium inventore cupiditate
                voluptas, pariatur quibusdam quo est architecto iste, illum
                repudiandae fuga modi laboriosam reprehenderit perspiciatis, at
                eius minus? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis sed eaque vero repellendus sit, nam labore,
                praesentium illo sequi harum eligendi dignissimos voluptate
                earum aspernatur ducimus ullam animi dicta quas.lorer Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi illo
                laudantium inventore cupiditate voluptas, pariatur quibusdam quo
                est architecto iste, illum repudiandae fuga modi laboriosam
                reprehenderit perspiciatis, at eius minus? cvLorem ipsum dolor
                sit amet consectetur adipisicing elit. Perspiciatis sed eaque
                vero repellendus sit, nam labore, praesentium illo sequi harum
                eligendi dignissimos voluptate earum aspernatur ducimus ullam
                animi dicta quas.lorer Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi illo laudantium inventore cupiditate
                voluptas, pariatur quibusdam quo est architecto iste, illum
                repudiandae fuga modi laboriosam reprehenderit perspiciatis, at
                eius minus?
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
