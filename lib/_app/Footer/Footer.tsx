import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="full"
      background={"white"}
      boxShadow="sm"
      p={5}
      borderTop="1px solid #e5e7eb"
    >
      <Flex
        maxW={"container.lg"}
        flexWrap={"wrap"}
        alignItems="center"
        w="full"
        margin="0 auto"
        gap={2}
        justifyContent={"space-between"}
      >
        <HStack spacing={5}>
          <Image
            width={50}
            height={50}
            alt="Hollowverse"
            src="/images/letter-logo.png"
          />

          <Text>
            Hollowverse is about the important <br />
            people and their beliefs.
          </Text>
        </HStack>

        <Text>
          Email us at{" "}
          <Link href="mailto:hollowverse@hollowverse.com">
            hollowverse@hollowverse.com
          </Link>
          .
        </Text>
      </Flex>
    </Flex>
  );
};
