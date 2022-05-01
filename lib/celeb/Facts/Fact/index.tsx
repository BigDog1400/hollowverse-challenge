import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";
import { Box, Flex, chakra, Tag, Heading, Image, Link } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

function transformFirstLetterToUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();
  return (
    <Flex py={8} px={6} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={4}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={"white"}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span fontSize="sm" color={"gray.600"}>
            {value.date}
          </chakra.span>
          <Tag
            px={3}
            py={1}
            fontWeight="700"
            rounded="full"
            variant={"outline"}
          >
            {transformFirstLetterToUpperCase(value.type)}
          </Tag>
        </Flex>

        <Box mt={2}>
          <Heading fontSize="2xl" color={"gray.700"} fontWeight="700">
            {(value.type === "quote" && `${value.context}, ${name} said`) ||
              (value.type === "fact" && `${value.content}`)}
          </Heading>
          {value.type === "quote" && (
            <chakra.p mt={2} color={"gray.600"} as="blockquote">
              “{value.quote}”
            </chakra.p>
          )}
        </Box>

        <Flex mt={4} gap={2} flexWrap="wrap">
          {value.tags.map((t) => {
            return (
              <Tag
                key={t.tag.name}
                p={2}
                minW="fit-content"
                borderRadius={"full"}
              >
                # {t.isLowConfidence && "Possibly "}
                {t.tag.name}
              </Tag>
            );
          })}
        </Flex>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex gap={3}>
            <Link
              color={"brand.600"}
              _hover={{ textDecor: "underline" }}
              href={value.source}
              target="_blank"
            >
              <LinkIcon mr={1} />
              Source
            </Link>
            <Link
              color={"brand.600"}
              _hover={{ textDecor: "underline" }}
              href={value.forumLink}
              target="_blank"
            >
              <LinkIcon mr={1} />
              Forum link
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
