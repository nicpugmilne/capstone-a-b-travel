import { Flex, Box, Heading, Image, Button } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

function Header({ user, setUser }) {
  const history = useHistory();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      setUser({});
      history.push("/");
    });
  }

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
      <NavBar user={user} setUser={setUser}></NavBar>
      {user !== null ? (
        <Button colorScheme="teal" onClick={handleLogout}>
          Log out
        </Button>
      ) : null}
    </Flex>
  );
}

export default Header;
