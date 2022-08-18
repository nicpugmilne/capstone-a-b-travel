import React from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  ButtonGroup,
  IconButton,
  HStack,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import DeleteTripPopover from "./DeleteTripPopover";
import EditTripPopover from "./EditTripPopover";

function ItineraryContainerHeader({
  tripName,
  handleCreateItinerary,
  tripId,
  updateTripName,
}) {
  const history = useHistory();

  function handleTripUpdate(name, image) {
    const updatedTrip = { name: name, image_url: image };
    fetch(`/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedTrip),
    })
      .then((r) => r.json())
      .then((trip) => updateTripName(trip.name));
  }

  return (
    <Flex minWidth="max-content" p="4" justifyContent="space-between">
      <Box>
        <Button onClick={() => history.push(`/trips`)}>
          Back to All Trips
        </Button>
      </Box>
      <Box>
        <HStack>
          <Heading size="lg">{tripName}</Heading>
          <ButtonGroup size="sm" isAttached>
            <EditTripPopover
              tripId={tripId}
              handleTripUpdate={handleTripUpdate}
            />
            <DeleteTripPopover tripId={tripId} />
          </ButtonGroup>
        </HStack>
      </Box>
      <Box>
        <Button onClick={handleCreateItinerary}>Create new Itinerary</Button>
      </Box>
    </Flex>
  );
}

export default ItineraryContainerHeader;
