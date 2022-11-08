import { Box } from "@chakra-ui/react";
import React from "react";
import CounterAppOne from "./components/CounterAppTwo";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-2</Box>
    <Box>
      <CounterAppOne />
    </Box>
  </Box>
);

export default App;
