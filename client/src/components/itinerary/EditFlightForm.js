import {
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function EditFlightForm({ module, onClose, handleEditModuleItem }) {
  const [name, setName] = useState(module.name);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [duration, setDuration] = useState(module.duration);
  const [cost, setCost] = useState(module.cost);
  const [notes, setNotes] = useState(module.notes);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setName(event.target.value);
        break;
      case "startDateInput":
        setStartDate(event.target.value);
        break;
      case "endDateInput":
        setEndDate(event.target.value);
        break;
      case "durationInput":
        setDuration(event.target.value);
        break;
      case "costInput":
        setCost(event.target.value);
        break;
      case "notesInput":
        setNotes(event.target.value);
        break;
    }
  };

  function handleEdit() {
    const updatedModule = {
      name: name,
      start_datetime: startDate,
      end_datetime: endDate,
      duration: duration,
      cost: cost,
      notes: notes,
    };
    console.log(updatedModule);
    fetch(`/itinerary_modules/${module.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedModule),
    })
      .then((r) => r.json())
      .then((item) => handleEditModuleItem(item, module.cost, module.duration));
    onClose();
  }

  return (
    <>
      <ModalBody p="2">
        <FormControl>
          <FormLabel mb="8px" fontSize="sm">
            Airline and flight number:
          </FormLabel>
          <Input
            value={name}
            name="nameInput"
            onChange={handleChange}
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Start date:
          </FormLabel>
          <Input
            value={startDate}
            type="date"
            name="startDateInput"
            onChange={handleChange}
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            End date:
          </FormLabel>
          <Input
            value={endDate}
            type="date"
            name="endDateInput"
            onChange={handleChange}
            size="sm"
          />
          <FormLabel my="8px" fontSize="sm">
            Duration:
          </FormLabel>
          <Input
            value={duration}
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
            value={cost}
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
            value={notes}
            name="notesInput"
            onChange={handleChange}
            placeholder="Enter notes you want to save"
            size="sm"
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue" mr={3} onClick={handleEdit}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
}

export default EditFlightForm;
