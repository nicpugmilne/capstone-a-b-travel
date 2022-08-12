import {
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ActivityFormContext } from "../../context/ActivityFormContext";

function ActivityForm() {
  const {
    nameValue,
    setNameValue,
    startDateValue,
    setStartDateValue,
    endDateValue,
    setEndDateValue,
    costValue,
    setCostValue,
    notesValue,
    setNotesValue,
  } = useContext(ActivityFormContext);

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
            Activity name:
          </FormLabel>
          <Input
            value={nameValue}
            name="nameInput"
            onChange={handleChange}
            placeholder="Paraglide in the Himalayas"
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
            Cost:
          </FormLabel>
          <Input
            value={costValue}
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

export default ActivityForm;
