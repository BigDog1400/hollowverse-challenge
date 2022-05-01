import { Box, Center, Flex, Heading, chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { sanityImage } from "~/lib/components/sanityio";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <Center py={10}>
      <Center as="section" maxW="container.lg">
        <Center as={"header"} flexWrap="wrap" justifyContent={"center"} px={2}>
          <div>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
              style={{
                borderRadius: "12px",
              }}
            />
          </div>
          <Heading
            as={"h1"}
            textAlign="center"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
            color={"gray.800"}
          >
            Religion, politics, and ideas of{" "}
            <chakra.span
              display={"inline-flex"}
              position={"relative"}
              isolation="isolate"
            >
              <chakra.p
                backgroundClip="text"
                position={"relative"}
                color={"gray.800"}
                zIndex={2}
              >
                {context.celeb.name}
              </chakra.p>
              <Box
                pos="absolute"
                top={"-2"}
                left={"-2"}
                right={"-2"}
                bottom={"-2"}
                zIndex={1}
                backgroundImage="linear-gradient(-90deg,#4535f74f,#fbc9546f,#4cfde838)"
                margin={"15px 3px 4px 4px"}
                transform="skewX(-10deg) skewY(-0.5deg)"
                borderRadius={"8px 20px 12px 20px"}
              ></Box>
            </chakra.span>
          </Heading>
        </Center>
      </Center>
    </Center>
  );
};
