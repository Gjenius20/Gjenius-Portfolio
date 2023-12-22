// import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";

import React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Homepage from "./Components/Homepage";
import About from "./Components/About";

const colors = {
    gjen: {
        100: "#747265",
        200: "#7F7F77",
        300: "#212322",
        400: "#202221",
        500: "#FF7345",
    },
};

const theme = extendTheme({ colors });
function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box bg="gjen.300" h="100vh">
                <Homepage />
                <About />
            </Box>
        </ChakraProvider>
    );
}

export default App;
