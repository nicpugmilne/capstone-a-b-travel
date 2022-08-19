import React from "react";
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
} from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

export default function EditTripPopover({ handleTripUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [imageInput, setImageInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleImageInputChange = (e) => setImageInput(e.target.value);
  const handleNameInputChange = (e) => setNameInput(e.target.value);

  const isError = imageInput === "" || nameInput === "";

  function handleUpdate() {
    onClose();
    handleTripUpdate(nameInput, imageInput);
  }

  return (
    <>
      <Tooltip hasArrow label="Edit trip">
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
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Edit Trip
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isInvalid={isError}>
                <FormLabel>Trip name</FormLabel>
                <Input value={nameInput} onChange={handleNameInputChange} />
                <FormLabel>Trip image</FormLabel>
                <Input
                  type="url"
                  value={imageInput}
                  onChange={handleImageInputChange}
                />
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              {isError ? (
                <Button isDisabled ref={cancelRef} onClick={handleUpdate}>
                  Save
                </Button>
              ) : (
                <Button ref={cancelRef} onClick={handleUpdate}>
                  Save
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
