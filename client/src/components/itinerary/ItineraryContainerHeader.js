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
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";

function ItineraryContainerHeader({
  tripName,
  handleCreateItinerary,
  tripId,
  updateTripName,
}) {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setTripNameValue] = useState("");

  function handleChange(e) {
    setTripNameValue(e.target.value);
  }

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
                <IconButton
                  icon={<MdModeEditOutline />}
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                />
                <IconButton
                  icon={<MdOutlineDeleteForever />}
                  variant="outline"
                />
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
