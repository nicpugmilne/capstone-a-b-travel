import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import ItineraryModuleItem from "./ItineraryModuleItem";

function ItineraryModuleContainer({ setModalOpen, modules }) {
  const moduleItems = modules.map((module) => {
    return (
      <ItineraryModuleItem
        key={module.id}
        module={module}
      ></ItineraryModuleItem>
    );
  });

  function handleClick() {
    setModalOpen(true);
  }

  return (
    <Box>
      <TableContainer>
        <Table size="sm" variant="unstyled">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Date</Th>
              <Th>Name</Th>
              <Th>Duration</Th>
              <Th>Cost</Th>
            </Tr>
          </Thead>
          <Tbody>{moduleItems}</Tbody>
        </Table>
      </TableContainer>
      <Button
        my={8}
        w={"full"}
        bg={"green.400"}
        color={"white"}
        rounded={"xl"}
        boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
        _hover={{
          bg: "green.500",
        }}
        _focus={{
          bg: "green.500",
        }}
        onClick={handleClick}
      >
        Add to trip
      </Button>
    </Box>
  );
}

export default ItineraryModuleContainer;
