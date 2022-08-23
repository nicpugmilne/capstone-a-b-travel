import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar({ handleLogout }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {user ? (
        <>
          <Breadcrumb separator="|" fontSize="lg">
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/discover"
                fontSize="lg"
                fontWeight="semibold"
              >
                Discover
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/trips"
                fontSize="lg"
                fontWeight="semibold"
              >
                My Trips
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button colorScheme="teal" onClick={handleLogout}>
            Log out
          </Button>
        </>
      ) : null}
    </>
  );
}

export default NavBar;
