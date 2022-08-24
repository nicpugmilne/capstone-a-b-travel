import { Tr, Td, Icon, Button } from "@chakra-ui/react";
import { MdFlight } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import EditModuleModal from "./EditModuleModal";
import ViewNotesModal from "./ViewNotesModal";

function ItineraryModuleItem({
  module,
  itineraryId,
  handleRemoveModuleItem,
  handleEditModuleItem,
}) {
  let icon;
  switch (module.module_type.id) {
    case 1:
      icon = MdFlight;
      break;
    case 2:
      icon = MdHotel;
      break;
    case 3:
      icon = MdDirectionsCar;
      break;
    case 4:
      icon = MdLocalActivity;
      break;
  }

  function handleDelete() {
    fetch(`/itinerary_modules/${module.id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(handleRemoveModuleItem(module));
  }

  return (
    <>
      <Tr>
        <Td>
          <Icon as={icon} color={"teal.700"} />
        </Td>
        <Td>
          {module.start_date} - {module.end_date}
        </Td>
        <Td>{module.name}</Td>
        <Td>{module.duration}</Td>
        <Td>${module.cost}</Td>
        <Td>
          <ViewNotesModal notes={module.notes} name={module.name} />
        </Td>
        <Td>
          <EditModuleModal
            module={module}
            itineraryId={itineraryId}
            handleEditModuleItem={handleEditModuleItem}
          />
        </Td>
        <Td onClick={handleDelete}>
          <Button
            size="xs"
            bg="red.600"
            color="white"
            _hover={{
              bg: "red.700",
            }}
            _focus={{
              bg: "red.700",
            }}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default ItineraryModuleItem;
