import { Box, Heading, Spacer, Button, Flex } from "@chakra-ui/react";

function TripContainerHeader({ setModalOpen }) {
  function handleCreateTrip() {
    setModalOpen(true);
  }
  return (
    <Flex minWidth="max-content" p="4">
      <Box>
        <Heading size="xl">My Trips</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button onClick={handleCreateTrip}>Create a trip</Button>
      </Box>
    </Flex>
  );
}

export default TripContainerHeader;
