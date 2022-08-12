import { useEffect } from "react";
import {
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { MdFlight } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";

import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import GroundTransportationForm from "./GroundTransportationForm";
import ActivityForm from "./ActivityForm";

function CreateModuleModal({ setModalOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  });

  function handleClose() {
    setModalOpen(false);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay w="full" />
      <ModalContent align="center">
        <ModalHeader>Create new trip event</ModalHeader>
        <Tabs variant="soft-rounded" align="center">
          <TabList>
            <Tab>
              <Icon as={MdFlight}>Icon</Icon>
            </Tab>
            <Tab>
              <Icon as={MdHotel}>Icon</Icon>
            </Tab>
            <Tab>
              <Icon as={MdDirectionsCar}>Icon</Icon>
            </Tab>
            <Tab>
              <Icon as={MdLocalActivity}>Icon</Icon>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FlightForm />
            </TabPanel>
            <TabPanel>
              <HotelForm />
            </TabPanel>
            <TabPanel>
              <GroundTransportationForm />
            </TabPanel>
            <TabPanel>
              <ActivityForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
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

export default CreateModuleModal;
