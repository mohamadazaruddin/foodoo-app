"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function UserProfile(props: any) {
  return (
    <Box w="full" display="grid" placeItems="center" mt="25px">
      <Box
        p="8px"
        border="2px solid #db3529"
        borderRadius="50%"
        w="80px"
        h="80px"
      >
        <Box w="100%" h="100%" borderRadius="50%">
          <Image
            borderRadius="50%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&usqp=CAU"
            w="full"
          />
        </Box>
      </Box>
    </Box>
  );
}
