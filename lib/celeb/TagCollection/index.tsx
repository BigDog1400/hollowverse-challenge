import { Center, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <VStack borderTop="1px solid #e5e7eb" py={10} gap={5}>
      <Center maxW={"container.lg"} flexWrap="wrap" gap={4}>
        {tags.regular.map((t) => (
          <Tag
            colorScheme={"gray"}
            borderRadius="full"
            variant={"subtle"}
            size={"lg"}
            key={t.tag.name}
          >
            {t.tag.name}
          </Tag>
        ))}
      </Center>

      {tags.lowConfidence.length > 0 && (
        <Center gap={2}>
          <Text fontStyle={"italic"}>Maybe</Text>
          <Center gap={4}>
            {tags.lowConfidence.map((t) => (
              <Tag
                colorScheme={"gray"}
                borderRadius="full"
                variant={"outline"}
                size={"lg"}
                key={t.tag.name}
              >
                {t.tag.name}
              </Tag>
            ))}
          </Center>
        </Center>
      )}
    </VStack>
  );
};
