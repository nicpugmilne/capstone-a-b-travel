import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function ItineraryContainerHeader({ tripName }) {
  const history = useHistory();
  function goBack() {
    history.push(`/trips`);
  }

  function handleCreate() {
    alert("user wants to create new itinerary");
  }

  return (
    <Flex minWidth="max-content" p="4" justifyContent="space-between">
      <Box>
        <Button onClick={goBack}>Back to All Trips</Button>
      </Box>
      <Box>
        {/* Would be nice to edit the trip title from here */}
        <Heading size="lg">{tripName}</Heading>
      </Box>
      <Box>
        <Button onClick={handleCreate}>Create new Itinerary</Button>
      </Box>
    </Flex>
  );
}

export default ItineraryContainerHeader;
