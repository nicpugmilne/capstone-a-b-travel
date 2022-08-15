import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function ItineraryContainerHeader({ tripName, handleCreateItinerary }) {
  const history = useHistory();

  return (
    <Flex minWidth="max-content" p="4" justifyContent="space-between">
      <Box>
        <Button onClick={() => history.push(`/trips`)}>
          Back to All Trips
        </Button>
      </Box>
      <Box>
        {/* Would be nice to edit the trip title from here */}
        <Heading size="lg">{tripName}</Heading>
      </Box>
      <Box>
        <Button onClick={handleCreateItinerary}>Create new Itinerary</Button>
      </Box>
    </Flex>
  );
}

export default ItineraryContainerHeader;
