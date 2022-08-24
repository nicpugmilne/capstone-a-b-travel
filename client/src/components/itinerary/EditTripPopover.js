import React, { useEffect } from "react";
import {
  Button,
  Icon,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Tooltip,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Image,
} from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

export default function EditTripPopover({
  handleTripUpdate,
  tripName,
  imageUrl,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [nameInput, setNameInput] = useState();
  const [imageInput, setImageInput] = useState();

  useEffect(() => {
    setNameInput(tripName);
    setImageInput(imageUrl);
  }, [imageUrl]);

  const handleNameInputChange = (e) => setNameInput(e.target.value);

  function handleUpdate() {
    onClose();
    handleTripUpdate(nameInput, imageInput);
  }

  function handleUpdateImage() {
    const location = nameInput.replace(/ /g, "");
    fetch(`/images/${location}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((image) => {
        setImageInput(image.urls.small);
      });
  }

  return (
    <>
      <Tooltip label="Edit trip">
        <Button onClick={onOpen} variant="ghost" size="md">
          <Icon as={MdModeEditOutline}></Icon>
        </Button>
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="xl">Edit Trip</AlertDialogHeader>
            <AlertDialogBody>
              <FormControl>
                <FormLabel>Trip location</FormLabel>
                <Input value={nameInput} onChange={handleNameInputChange} />
                <Flex direction="column" alignItems={"center"}>
                  <Image src={imageInput} m={3}></Image>
                  <Button onClick={handleUpdateImage} w="30%">
                    Get new image
                  </Button>
                </Flex>
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button ref={cancelRef} onClick={handleUpdate} ml={3}>
                Save
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
