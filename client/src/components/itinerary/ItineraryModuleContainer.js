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

function ItineraryModuleContainer({ modules }) {
  const moduleItems = modules.map((module) => {
    return (
      <ItineraryModuleItem
        key={module.id}
        module={module}
      ></ItineraryModuleItem>
    );
  });

  return (
    <Box>
      <TableContainer>
        <Table size="sm" variant="unstyled" my="3">
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
    </Box>
  );
}

export default ItineraryModuleContainer;
