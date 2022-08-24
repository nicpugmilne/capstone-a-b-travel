import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Flex,
  Divider,
} from "@chakra-ui/react";
import ItineraryModuleItem from "./ItineraryModuleItem";
import { useState } from "react";
import CreateModuleModal from "./CreateModuleModal";

function ItineraryModuleContainer({
  modules,
  itineraryId,
  handleAddModule,
  handleRemoveModuleItem,
  handleEditModuleItem,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const moduleItems = modules.map((module) => {
    return (
      <ItineraryModuleItem
        key={module.id}
        module={module}
        handleRemoveModuleItem={handleRemoveModuleItem}
        itineraryId={itineraryId}
        handleEditModuleItem={handleEditModuleItem}
      ></ItineraryModuleItem>
    );
  });

  function handleClickAddModule() {
    setModalOpen(true);
  }

  return (
    <Flex direction={"column"} mx={3} alignItems="center">
      {isModalOpen ? (
        <CreateModuleModal
          setModalOpen={setModalOpen}
          itineraryId={itineraryId}
          handleAddModule={handleAddModule}
        />
      ) : null}

      <TableContainer
        _hover={{
          cursor: "pointer",
        }}
      >
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
          <Tbody>{modules.length !== 0 ? moduleItems : null}</Tbody>
        </Table>
      </TableContainer>
      <Button
        mt={6}
        mb={8}
        w={"50%"}
        bg={"cyan.200"}
        rounded={"xl"}
        boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
        _hover={{
          bg: "cyan.300",
        }}
        _focus={{
          bg: "cyan.300",
        }}
        onClick={handleClickAddModule}
      >
        Add to trip
      </Button>
    </Flex>
  );
}

export default ItineraryModuleContainer;
