import {
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GroundTransportationFormContext } from "../../context/GroundTransportationFormContext";

function GroundTransportationForm({
  handleModalClose,
  itineraryId,
  handleAddModule,
}) {
  const {
    groundTransportationNameValue,
    setGroundTransportationNameValue,
    groundTransportationStartDateValue,
    setGroundTransportationStartDateValue,
    groundTransportationEndDateValue,
    setGroundTransportationEndDateValue,
    groundTransportationCostValue,
    setGroundTransportationCostValue,
    groundTransportationDurationValue,
    setGroundTransportationDurationValue,
    groundTransportationNotesValue,
    setGroundTransportationNotesValue,
  } = useContext(GroundTransportationFormContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setGroundTransportationNameValue(event.target.value);
        break;
      case "startDateInput":
        setGroundTransportationStartDateValue(event.target.value);
        break;
      case "endDateInput":
        setGroundTransportationEndDateValue(event.target.value);
        break;
      case "durationInput":
        setGroundTransportationDurationValue(event.target.value);
        break;
      case "costInput":
        setGroundTransportationCostValue(event.target.value);
        break;
      case "notesInput":
        setGroundTransportationNotesValue(event.target.value);
        break;
    }
  };

  function handleSave() {
    handleModalClose();
    const newModule = {
      module_type_id: 3,
      itinerary_id: itineraryId,
      name: groundTransportationNameValue,
      start_datetime: groundTransportationStartDateValue,
      end_datetime: groundTransportationEndDateValue,
      duration: groundTransportationDurationValue,
      cost: groundTransportationCostValue,
      notes: groundTransportationNotesValue,
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
        setGroundTransportationNameValue("");
        setGroundTransportationStartDateValue("");
        setGroundTransportationEndDateValue("");
        setGroundTransportationDurationValue();
        setGroundTransportationCostValue();
        setGroundTransportationNotesValue("");
      });
  }

  return (
    <ModalBody p="2">
      <FormControl>
        <FormLabel mb="8px" fontSize="sm">
          Transportation name:
        </FormLabel>
        <Input
          value={groundTransportationNameValue}
          name="nameInput"
          onChange={handleChange}
          placeholder="Eg. Amtrak 123 or Hertz car rental"
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Start date:
        </FormLabel>
        <Input
          value={groundTransportationStartDateValue}
          type="date"
          name="startDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          End date:
        </FormLabel>
        <Input
          value={groundTransportationEndDateValue}
          type="date"
          name="endDateInput"
          onChange={handleChange}
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Duration:
        </FormLabel>
        <Input
          value={groundTransportationDurationValue}
          name="durationInput"
          onChange={handleChange}
          placeholder="Enter duration in minutes"
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Cost:
        </FormLabel>
        <Input
          value={groundTransportationCostValue}
          name="costInput"
          onChange={handleChange}
          placeholder="Enter cost in your currency"
          size="sm"
        />
        <FormLabel my="8px" fontSize="sm">
          Notes:
        </FormLabel>
        <Textarea
          value={groundTransportationNotesValue}
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

export default GroundTransportationForm;
