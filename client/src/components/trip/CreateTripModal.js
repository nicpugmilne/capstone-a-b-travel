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
  Image,
  Flex,
} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";

function CreateTripModal({ setModalOpen, handleAddTrip }) {
  const { user } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nameValue, setNameValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (event) => setNameValue(event.target.value);

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
      image_url: imageUrl,
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
        setImageUrl("");
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

  function handleFetchImage() {
    const location = nameValue.replace(/ /g, "");
    fetch(`/images/${location}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((image) => {
        setImageUrl(image.urls.small);
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
                Trip location:
              </FormLabel>
              <Input
                value={nameValue}
                name="nameInput"
                onChange={handleChange}
                placeholder="Saint Lucia"
                size="sm"
              />
              {nameValue ? (
                !imageUrl ? (
                  <Button onClick={handleFetchImage} mt={3}>
                    Get image
                  </Button>
                ) : (
                  <Flex direction="column" alignItems={"center"}>
                    <Image src={imageUrl} m={3}></Image>
                    <Button onClick={handleFetchImage} w="30%">
                      Get new image
                    </Button>
                  </Flex>
                )
              ) : null}
            </FormControl>
          </form>
        </ModalBody>
        <ModalCloseButton />
        <ModalFooter>
          {imageUrl ? (
            <Button colorScheme="blue" mr={3} onClick={handleCreateTrip}>
              Save
            </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateTripModal;
