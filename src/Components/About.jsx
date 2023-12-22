import {
    Box,
    Center,
    Flex,
    Heading,
    Highlight,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
    return (
        <Box h="100vh" bg="gjen.300">
            <Box textColor="white" fontSize="25px" paddingInline="10">
                <Flex alignItems="center" justifyContent="center" h="100vh">
                    <Flex
                        flexDirection="column"
                        gap={{ md: "10vh", base: " 6vh" }}
                        fontSize={{ lg: "2.7vh", base: "2vh" }}>
                        <Heading color="white">About</Heading>

                        <Text textColor="gjen.100" fontWeight="semibold">
                            <Highlight
                                query={["Dafa Dhiyaul Haq ", "Gjenius"]}
                                styles={{
                                    color: ["gjen.500"],
                                    fontWeight: "Bold",
                                }}>
                                Hello, my name is Dafa Dhiyaul Haq or well known
                                as GJENIUS, I am a passionate creator with a
                                strong interest in coding, photography, and
                                designing. The First time I started coding is
                                when I was in high school, and since then I have
                                honed my skills to pursue my passion in building
                                websites, software, and apps.
                            </Highlight>
                        </Text>
                        <Text
                            textAlign="center"
                            color="gjen.200"
                            fontWeight="bold">
                            I also enjoy capturing the any memorable moments
                            with my camera and edit the photo or vidio and then
                            upload it to my social media. I find that the same
                            creativity and eye for detail that I apply to coding
                            also come to play in my photography and editing
                            process, which allows me to create pieces of art
                            through my photos and videos.
                        </Text>
                        <Text color="gjen.100" fontWeight="bold">
                            Overall, I am always looking for ways to push my
                            personal and professional boundaries. I believe that
                            my creativity, dedication and thirst for new
                            knowledge will continue to drive me in my
                            professional career and creative endeavors.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default About;
