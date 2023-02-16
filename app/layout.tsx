"use client";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import "../styles/globals.css";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Flex
            w="full"
            h="full"
            overflowY="auto"
            backgroundColor="#fcf4f0"
            className="cardscontainer"
          >
            {path !== "/signup" && path !== "/" ? (
              <Box>
                <Navbar />
              </Box>
            ) : null}
            <Box w="full" h="full">
              {children}
            </Box>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
