import { useEffect } from "react";
import {
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
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

function CreateModuleModal({ setModalOpen, itineraryId, handleAddModule }) {
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
              <FlightForm
                handleModalClose={handleClose}
                itineraryId={itineraryId}
                handleAddModule={handleAddModule}
              />
            </TabPanel>
            <TabPanel>
              <HotelForm
                handleModalClose={handleClose}
                itineraryId={itineraryId}
                handleAddModule={handleAddModule}
              />
            </TabPanel>
            <TabPanel>
              <GroundTransportationForm
                handleModalClose={handleClose}
                itineraryId={itineraryId}
                handleAddModule={handleAddModule}
              />
            </TabPanel>
            <TabPanel>
              <ActivityForm
                handleModalClose={handleClose}
                itineraryId={itineraryId}
                handleAddModule={handleAddModule}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}

export default CreateModuleModal;
