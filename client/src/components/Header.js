import { Flex, Box, Heading, Image, Button } from "@chakra-ui/react";
import NavBar from "./NavBar";

function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p="2"
      borderBottomRadius="sm"
      boxShadow="sm"
      justify={"space-between"}
    >
      <Box p="2">
        <Heading size="md">
          <Image
            boxSize="45px"
            src="/ab-travel-logo.png"
            alt="A/B travel logo"
          />
        </Heading>
      </Box>
      <NavBar></NavBar>
      <Button colorScheme="teal" onClick={console.log("click")}>
        Log in
      </Button>
    </Flex>
  );
}

export default Header;
