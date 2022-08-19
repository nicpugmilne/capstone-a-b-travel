import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Center,
} from "@chakra-ui/react";
import PublicTripModuleItem from "./PublicTripModuleItem";

export default function PublicTripModuleTable({ modules }) {
  const moduleItems = modules.map((module) => {
    return (
      <PublicTripModuleItem
        key={module.id}
        module={module}
      ></PublicTripModuleItem>
    );
  });
  return (
    <Table size="sm" variant="unstyled">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Name</Th>
          <Th>Cost</Th>
        </Tr>
      </Thead>
      <Tbody>{moduleItems}</Tbody>
    </Table>
  );
}
