import { useState, useEffect } from "react";
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

function CreateTripModal({ setModalOpen }) {
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

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay w="full" />
      <ModalContent align="center">
        <ModalHeader>Create new trip</ModalHeader>
        <ModalBody p="2">
          <form id="create-form">
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
                name="ImageInput"
                onChange={handleChange}
                placeholder="Please provide an image for this trip"
                size="sm"
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalCloseButton />
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={console.log("save button was clicked")}
            type="submit"
            form="create-form"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateTripModal;
