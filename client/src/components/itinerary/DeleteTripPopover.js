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
} from "@chakra-ui/react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function DeleteTripPopover({ tripId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const history = useHistory();

  function handleDeleteTrip() {
    onClose();
    fetch(`/trips/${tripId}`, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      history.push(`/trips`);
    });
  }

  return (
    <>
      <Tooltip hasArrow label="Delete Trip">
        <Button onClick={onOpen} colorScheme="red" variant="ghost" size="md">
          <Icon as={MdOutlineDeleteForever}></Icon>
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
              Delete Trip
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteTrip} ml={3}>
                Delete Trip
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
