import { Tr, Td, Icon } from "@chakra-ui/react";
import { MdFlight } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";

function PublicTripModuleItem({ module }) {
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

  return (
    <>
      <Tr>
        <Td>
          <Icon as={icon} />
        </Td>
        <Td>{module.name}</Td>
        <Td>${module.cost}</Td>
      </Tr>
    </>
  );
}

export default PublicTripModuleItem;
