import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact } from "~/lib/celeb/Facts/Fact";
import { Box, VStack, Heading } from "@chakra-ui/react";

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <VStack borderTop="1px solid #e5e7eb" py={10} px={5} spacing={20}>
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          <Box
            key={`${topic}-${i}`}
            py={10}
            backgroundImage="linear-gradient(-90deg,#4535f74f,#fbc9546f,#4cfde838)"
            borderRadius={"md"}
          >
            <Heading
              as={"h1"}
              textAlign="center"
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
              letterSpacing="tight"
              lineHeight="short"
              fontWeight="extrabold"
              backgroundClip="text"
              color={"gray.800"}
            >
              {topic}
            </Heading>

            {factGroup.map((fact, innerI) => {
              return (
                <div key={`${topic}-${i}-${innerI}`}>
                  <Fact value={fact} />
                </div>
              );
            })}
          </Box>
        );
      })}
    </VStack>
  );
};
