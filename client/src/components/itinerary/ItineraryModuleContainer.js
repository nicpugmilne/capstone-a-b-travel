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
import { useState } from "react";
import CreateModuleModal from "./CreateModuleModal";

function ItineraryModuleContainer({
  modules,
  itineraryId,
  handleAddModule,
  handleRemoveModuleItem,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const moduleItems = modules.map((module) => {
    return (
      <ItineraryModuleItem
        key={module.id}
        module={module}
        handleRemoveModuleItem={handleRemoveModuleItem}
      ></ItineraryModuleItem>
    );
  });

  function handleClickAddModule() {
    setModalOpen(true);
  }

  return (
    <Box>
      {isModalOpen ? (
        <CreateModuleModal
          setModalOpen={setModalOpen}
          itineraryId={itineraryId}
          handleAddModule={handleAddModule}
        />
      ) : null}
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
          <Tbody>{modules.length !== 0 ? moduleItems : null}</Tbody>
        </Table>
      </TableContainer>
      <Button
        my={8}
        w={"full"}
        bg={"green.300"}
        color={"white"}
        rounded={"xl"}
        boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
        _hover={{
          bg: "green.400",
        }}
        _focus={{
          bg: "green.400",
        }}
        onClick={handleClickAddModule}
      >
        Add to trip
      </Button>
    </Box>
  );
}

export default ItineraryModuleContainer;
