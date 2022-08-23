import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      setUser({});
      history.push("/");
      history.go();
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
            src="/AB_travel_logo.png"
            alt="A/B travel logo"
          />
        </Heading>
      </Box>
      <NavBar handleLogout={handleLogout} />
    </Flex>
  );
}

export default Header;
