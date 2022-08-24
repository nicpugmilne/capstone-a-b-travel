import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import EditActivityForm from "./EditActivityForm";
import EditFlightForm from "./EditFlightForm";
import EditGroundTransportationForm from "./EditGroundTransportationForm";
import EditHotelForm from "./EditHotelForm";

export default function EditModuleModal({
  module,
  itineraryId,
  handleEditModuleItem,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let moduleFormType = {};
  switch (module.module_type.id) {
    case 1:
      moduleFormType = (
        <EditFlightForm
          module={module}
          onClose={onClose}
          itineraryId={itineraryId}
          handleEditModuleItem={handleEditModuleItem}
        />
      );
      break;
    case 2:
      moduleFormType = (
        <EditHotelForm
          module={module}
          onClose={onClose}
          itineraryId={itineraryId}
          handleEditModuleItem={handleEditModuleItem}
        />
      );
      break;
    case 3:
      moduleFormType = (
        <EditGroundTransportationForm
          module={module}
          onClose={onClose}
          itineraryId={itineraryId}
          handleEditModuleItem={handleEditModuleItem}
        />
      );
      break;
    case 4:
      moduleFormType = (
        <EditActivityForm
          module={module}
          onClose={onClose}
          itineraryId={itineraryId}
          handleEditModuleItem={handleEditModuleItem}
        />
      );
      break;
  }

  return (
    <>
      <Button
        size="xs"
        onClick={onOpen}
        // variant="outline"
        bg={"teal.400"}
        color="white"
        _hover={{
          bg: "teal.500",
        }}
        _focus={{
          bg: "teal.500",
        }}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Want to make a change?</ModalHeader>
          <ModalCloseButton />
          {moduleFormType}
        </ModalContent>
      </Modal>
    </>
  );
}
