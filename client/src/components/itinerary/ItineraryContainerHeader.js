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

function ItineraryContainerHeader({
  tripName,
  handleCreateItinerary,
  tripId,
  updateTripName,
}) {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setTripNameValue] = useState("");
  const { onOpen, onClose, isOpen } = useDisclosure();

  function handleChange(e) {
    setTripNameValue(e.target.value);
  }
  //Maybe change the trip edit from just the name to also the image https://v1.chakra-ui.com/docs/components/overlay/popover#trapping-focus-within-popover
  function handleTripNameUpdate() {
    const updatedTrip = { name: name };
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
    setIsEditing(!isEditing);
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
          {isEditing ? (
            <InputGroup>
              <Input
                placeholder="Set new trip name"
                value={name}
                onChange={handleChange}
              />
              <InputRightElement
                children={
                  <Icon
                    as={MdCheck}
                    color="green.500"
                    onClick={handleTripNameUpdate}
                  />
                }
              />
            </InputGroup>
          ) : (
            <>
              <Heading size="lg">{tripName}</Heading>
              <ButtonGroup size="sm" isAttached>
                <Tooltip hasArrow label="Edit Trip Name">
                  <IconButton
                    icon={<MdModeEditOutline />}
                    size="md"
                    variant="ghost"
                    onClick={() => setIsEditing(!isEditing)}
                  />
                </Tooltip>
                <DeleteTripPopover tripId={tripId} />
              </ButtonGroup>
            </>
          )}
        </HStack>
      </Box>
      <Box>
        <Button onClick={handleCreateItinerary}>Create new Itinerary</Button>
      </Box>
    </Flex>
  );
}

export default ItineraryContainerHeader;
