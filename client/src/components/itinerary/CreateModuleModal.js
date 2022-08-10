import { useState, useEffect } from "react";
import { Box, Icon, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";

  import {
    Text,
    HStack,
    Button,
    Input,
    Select,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
import {MdFlight} from 'react-icons/md'
import {MdHotel} from 'react-icons/md'
import {MdDirectionsCar} from 'react-icons/md'
import {MdLocalActivity} from 'react-icons/md'
import FlightForm from "./FlightForm";

function CreateModuleModal({setModalOpen}){
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  function handleClose() {
    setModalOpen(false);
    onClose();
  }

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new module</ModalHeader>
          <HStack justify={'center'}>
            <Icon as={MdFlight}>Icon</Icon>
            <Icon as={MdHotel}>Icon</Icon>
            <Icon as={MdDirectionsCar}>Icon</Icon>
            <Icon as={MdLocalActivity}>Icon</Icon>
          </HStack>
          <ModalCloseButton />
            <FlightForm></FlightForm>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={console.log('save button was clicked')}
              type="submit"
              form="create-form"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default CreateModuleModal;