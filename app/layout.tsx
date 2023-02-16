"use client";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Flex w="full" h="full" overflowY="auto" backgroundColor="#fcf4f0">
            <Box>
              <Navbar />
            </Box>
            <Box w="full" h="full">
              {children}
            </Box>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
