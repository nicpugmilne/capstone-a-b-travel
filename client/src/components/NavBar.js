import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar({ user, setUser }) {
  const [navigation, setNavigation] = useState(null);

  const notLoggedInNavigation = (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" fontWeight="semibold" fontSize="xl">
          Sign Up
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  const loggedInNavigation = (
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
  );

  useEffect(() => {
    user
      ? setNavigation(loggedInNavigation)
      : setNavigation(notLoggedInNavigation);
  }, [user]);

  // function handleLogin() {
  //   setLoginModalOpen(true);
  // }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((res) => setUser({}));
  }

  return <>{navigation}</>;
  // <Breadcrumb separator="|">
  //   <BreadcrumbItem>
  //     <BreadcrumbLink
  //       as={Link}
  //       to="/trips"
  //       fontWeight="semibold"
  //       fontSize="xl"
  //     >
  //       My Trips
  //     </BreadcrumbLink>
  //   </BreadcrumbItem>
  //   <BreadcrumbItem>
  //     <BreadcrumbLink as={Link} to="/" fontSize="xl" fontWeight="semibold">
  //       Home
  //     </BreadcrumbLink>
  //   </BreadcrumbItem>
  // </Breadcrumb>
}

export default NavBar;
