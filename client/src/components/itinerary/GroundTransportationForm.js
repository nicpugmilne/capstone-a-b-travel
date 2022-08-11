import {
  ModalBody,
  Input,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

function GroundTransportationForm() {
  const [nameValue, setNameValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [durationValue, setDurationValue] = useState();
  const [costValue, setCostValue] = useState();
  const [notesValue, setNotesValue] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setNameValue(event.target.value);
        break;
      case "startDateInput":
        setStartDateValue(event.target.value);
        break;
      case "endDateInput":
        setEndDateValue(event.target.value);
        break;
      case "durationInput":
        setDurationValue(event.target.value);
        break;
      case "costInput":
        setCostValue(event.target.value);
        break;
      case "notesInput":
        setNotesValue(event.target.value);
        break;
    }
  };

  return (
    <ModalBody p="2">
      <form id="create-form">
        <FormControl>
          <FormLabel mb="8px" fontSize="sm">
            Transportation name:
          </FormLabel>
          <Input
            value={nameValue}
            name="nameInput"
            onChange={handleChange}
            placeholder="Eg. Amtrak 123 or Hertz car rental"
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Start date:
          </FormLabel>
          <Input
            value={startDateValue}
            type="date"
            name="startDateInput"
            onChange={handleChange}
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            End date:
          </FormLabel>
          <Input
            value={endDateValue}
            type="date"
            name="endDateInput"
            onChange={handleChange}
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Duration:
          </FormLabel>
          <Input
            value={durationValue}
            name="durationInput"
            onChange={handleChange}
            placeholder="Enter duration in minutes"
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Cost:
          </FormLabel>
          <Input
            value={costValue}
            name="costInput"
            onChange={handleChange}
            placeholder="Enter cost in your currency"
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Notes:
          </FormLabel>
          <Input
            value={notesValue}
            name="notesInput"
            onChange={handleChange}
            placeholder="Enter notes you want to save"
            size="sm"
          />
        </FormControl>
      </form>
    </ModalBody>
  );
}

export default GroundTransportationForm;
