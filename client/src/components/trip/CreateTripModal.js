import { useState, useEffect, useContext } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";

function CreateTripModal({ setModalOpen, handleAddTrip }) {
  const { user } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setNameValue(event.target.value);
        break;
      case "imageInput":
        setImageValue(event.target.value);
        break;
    }
  };

  useEffect(() => {
    onOpen();
  }, []);

  function handleClose() {
    setModalOpen(false);
    onClose();
  }

  const handleCreateTrip = () => {
    handleClose();
    const newTrip = {
      user_id: user.id,
      name: nameValue,
      image_url: imageValue,
    };
    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newTrip),
    })
      .then((r) => r.json())
      .then((newTrip) => {
        handleAddTrip(newTrip);
        setNameValue("");
        setImageValue("");
        createFirstItinerary(newTrip.id);
      });
  };
  function createFirstItinerary(tripId) {
    const newItinerary = {
      trip_id: tripId,
      name: `Itinerary A`,
      is_favorite: false,
      is_published: false,
    };
    fetch("/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newItinerary),
    });
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay w="full" />
      <ModalContent align="center">
        <ModalHeader>Create new trip</ModalHeader>
        <ModalBody p="2">
          <form>
            <FormControl>
              <FormLabel mb="8px" fontSize="sm">
                Trip name:
              </FormLabel>
              <Input
                value={nameValue}
                name="nameInput"
                onChange={handleChange}
                placeholder="Bahamas 2022"
                size="sm"
              />
              <FormLabel my="8px" fontSize="sm">
                Image
              </FormLabel>
              <Input
                value={imageValue}
                name="imageInput"
                onChange={handleChange}
                placeholder="Please provide an image for this trip"
                size="sm"
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalCloseButton />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateTrip}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateTripModal;
