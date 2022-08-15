import {
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FlightFormContext } from "../../context/FlightFormContext";

function FlightForm({ handleModalClose, itineraryId, handleAddModule }) {
  const {
    flightNameValue,
    setFlightNameValue,
    flightStartDateValue,
    setFlightStartDateValue,
    flightEndDateValue,
    setFlightEndDateValue,
    flightCostValue,
    setFlightCostValue,
    flightDurationValue,
    setFlightDurationValue,
    flightNotesValue,
    setFlightNotesValue,
  } = useContext(FlightFormContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setFlightNameValue(event.target.value);
        break;
      case "startDateInput":
        setFlightStartDateValue(event.target.value);
        break;
      case "endDateInput":
        setFlightEndDateValue(event.target.value);
        break;
      case "durationInput":
        setFlightDurationValue(event.target.value);
        break;
      case "costInput":
        setFlightCostValue(event.target.value);
        break;
      case "notesInput":
        setFlightNotesValue(event.target.value);
        break;
    }
  };

  function handleSave() {
    handleModalClose();
    const newModule = {
      module_type_id: 1,
      itinerary_id: itineraryId,
      name: flightNameValue,
      start_datetime: flightStartDateValue,
      end_datetime: flightEndDateValue,
      duration: flightDurationValue,
      cost: flightCostValue,
      notes: flightNotesValue,
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
        setFlightNameValue("");
        setFlightStartDateValue("");
        setFlightEndDateValue("");
        setFlightDurationValue("");
        setFlightCostValue("");
        setFlightNotesValue("");
      });
  }

  return (
    <ModalBody p="2">
      <FormControl>
        <FormLabel mb="8px" fontSize="sm">
          Airline and flight number:
        </FormLabel>
        <Input
          value={flightNameValue}
          name="nameInput"
          onChange={handleChange}
          placeholder="NZ1"
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Start date:
        </FormLabel>
        <Input
          value={flightStartDateValue}
          type="date"
          name="startDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          End date:
        </FormLabel>
        <Input
          value={flightEndDateValue}
          type="date"
          name="endDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Duration:
        </FormLabel>
        <Input
          value={flightDurationValue}
          name="durationInput"
          onChange={handleChange}
          placeholder="Enter duration in minutes"
          size="sm"
          type="number"
        />
        <FormLabel my="8px" fontSize="sm">
          Cost:
        </FormLabel>
        <Input
          value={flightCostValue}
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
          value={flightNotesValue}
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

export default FlightForm;
