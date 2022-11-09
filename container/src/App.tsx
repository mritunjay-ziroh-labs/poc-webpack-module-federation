import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Image,
  Link,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const LeftSideBar = React.lazy(() => import("./modules/LeftSideBar"));

function ErrorFallback() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        p="2rem"
        mr="2rem"
        border="1px solid #aeaeae"
        borderRadius="1rem"
        backgroundColor="#fff"
      >
        <Spinner />
      </Box>
    </Flex>
  );
}

const App = () => (
  <>
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Flex
        border="1px solid #151421"
        borderRadius="1rem"
        height="max-content"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        padding="5rem"
        backgroundColor="#6F60EA"
      >
        <Heading color="#fff" m={4}>
          CONTAINER APP
        </Heading>

        <Flex direction="row" justifyContent="space-between" width="80vw">
          {/* <React.Suspense fallback={<p>Loading...</p>}> */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Box
              p="2rem"
              mr="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-1
              </Heading>
              <CounterAppOne />
            </Box>
          </ErrorBoundary>
          {/* </React.Suspense> */}
          {/* <React.Suspense fallback={<p>Loading...</p>}> */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-2
              </Heading>
              <CounterAppTwo />
            </Box>
          </ErrorBoundary>
          {/* </React.Suspense> */}
          {/* <React.Suspense fallback={<p>Loading...</p>}> */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-3
              </Heading>
              <LeftSideBar />
            </Box>
          </ErrorBoundary>
          {/* </React.Suspense> */}
        </Flex>
      </Flex>
    </Center>
  </>
);

export default App;
