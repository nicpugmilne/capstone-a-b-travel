import {
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { HotelFormContext } from "../../context/HotelFormContext";

function HotelForm({ handleModalClose, itineraryId, handleAddModule }) {
  const {
    hotelNameValue,
    setHotelNameValue,
    hotelStartDateValue,
    setHotelStartDateValue,
    hotelEndDateValue,
    setHotelEndDateValue,
    hotelCostValue,
    setHotelCostValue,
    hotelNotesValue,
    setHotelNotesValue,
  } = useContext(HotelFormContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setHotelNameValue(event.target.value);
        break;
      case "startDateInput":
        setHotelStartDateValue(event.target.value);
        break;
      case "endDateInput":
        setHotelEndDateValue(event.target.value);
        break;
      case "costInput":
        setHotelCostValue(event.target.value);
        break;
      case "notesInput":
        setHotelNotesValue(event.target.value);
        break;
    }
  };
  function handleSave() {
    handleModalClose();
    const newModule = {
      module_type_id: 2,
      itinerary_id: itineraryId,
      name: hotelNameValue,
      start_datetime: hotelStartDateValue,
      end_datetime: hotelEndDateValue,
      cost: hotelCostValue,
      notes: hotelNotesValue,
    };
    fetch("/itinerary_modules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newModule),
    })
      .then((r) => r.json())
      .then((newModule) => {
        handleAddModule(newModule);
        setHotelNameValue("");
        setHotelStartDateValue("");
        setHotelEndDateValue("");
        setHotelCostValue();
        setHotelNotesValue("");
      });
  }

  return (
    <ModalBody p="2">
      <FormControl>
        <FormLabel mb="8px" fontSize="sm">
          Hotel name:
        </FormLabel>
        <Input
          value={hotelNameValue}
          name="nameInput"
          onChange={handleChange}
          placeholder="The Hotel Budapest"
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Start date:
        </FormLabel>
        <Input
          value={hotelStartDateValue}
          type="date"
          name="startDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          End date:
        </FormLabel>
        <Input
          value={hotelEndDateValue}
          type="date"
          name="endDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Cost:
        </FormLabel>
        <Input
          value={hotelCostValue}
          name="costInput"
          onChange={handleChange}
          placeholder="Enter cost in your currency"
          size="sm"
          type="number"
        />
        <FormLabel my="8px" fontSize="sm">
          Notes:
        </FormLabel>
        <Textarea
          value={hotelNotesValue}
          name="notesInput"
          onChange={handleChange}
          placeholder="Enter notes you want to save"
          size="sm"
        />
      </FormControl>
      <Button colorScheme="blue" mt={5} onClick={handleSave}>
        Save
      </Button>
    </ModalBody>
  );
}

export default HotelForm;
