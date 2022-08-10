import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <Breadcrumb separator="|">
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/" fontWeight="semibold" fontSize="xl">
                    Trips
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/trips" fontSize="lg" fontWeight="semibold">
                    Itineraries
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default NavBar;