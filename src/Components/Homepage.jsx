import React from "react";
import {
    Box,
    Center,
    Circle,
    Flex,
    Heading,
    Image,
    Square,
    Text,
} from "@chakra-ui/react";

const Homepage = () => {
    return (
        <Box h="100vh">
            <Heading color="white" pl="10" pt="10">
                GJENIUS
            </Heading>
            <Flex alignItems="center" h="100vh" justifyContent="space-between">
                <Heading
                    color="white"
                    paddingInline="10"
                    pos="absolute"
                    size="2xl"
                    zIndex="3"
                    fontFamily="">
                    <Text fontSize="70">Hi my name is Gjenius</Text>
                    <Text>I like to Create, Code, Capture</Text>
                </Heading>

                <Flex alignItems={{ base: "center", xl: "flex-end" }}>
                    <Image
                        bottom={{ base: "50" }}
                        pos={{ base: "absolute" }}
                        mt={{ base: "-10vh" }}
                        right={{ base: 0 }}
                        src="./images/Header.svg"
                        zIndex="2"
                        minWidth={{ md: "50vh" }}
                        boxSize="90vh"
                    />

                    <Image
                        bottom={{ base: "50" }}
                        right="2"
                        pos="absolute"
                        src="./images/Background.svg"
                        zIndex="0"
                        blendMode={"multiply"}
                        minWidth="90vh"
                        boxSize="90vh"
                        hideBelow={"xl"}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Homepage;
