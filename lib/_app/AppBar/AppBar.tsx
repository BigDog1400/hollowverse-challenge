import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

export const AppBar = () => {
  return (
    <Box background={"white"} boxShadow="sm" py={3}>
      <Flex
        as="section"
        pos={"relative"}
        justifyContent="space-around"
        flexWrap={"wrap"}
      >
        <Box px={5}>
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={250}
                height={30}
                alt="Hollowverse"
                layout="fixed"
              />
            </a>
          </Link>
        </Box>

        <Box justifySelf={"center"} px={5}>
          {/* Search input */}
          <InputGroup variant={"outline"}>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color="gray.600" />}
            />
            <Input type="search" placeholder="Search for a celebrity" />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
};
