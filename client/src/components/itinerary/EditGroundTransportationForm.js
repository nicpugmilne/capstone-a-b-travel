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

function EditGroundTransportationForm({
  module,
  itineraryId,
  onClose,
  handleEditModuleItem,
}) {
  const [name, setName] = useState(module.name);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const startDateArr = startDate.split("-");
    const startMonth = startDateArr[1];
    const startDay = startDateArr[2];
    const endDateArr = endDate.split("-");
    const endMonth = endDateArr[1];
    const endDay = endDateArr[2];

    let startMonthIndex = parseInt(startMonth) - 1;
    let startMonthName = monthNames[startMonthIndex];
    let endMonthIndex = parseInt(endMonth) - 1;
    let endMonthName = monthNames[endMonthIndex];

    const formattedStartDate = `${startMonthName} ${startDay}`;
    const formattedEndDate = `${endMonthName} ${endDay}`;

    const updatedModule = {
      id: module.id,
      module_type: { id: 3 },
      itinerary_id: itineraryId,
      name: name,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      duration: duration,
      cost: cost,
      notes: notes,
    };

    handleEditModuleItem(updatedModule);
    onClose();
  }

  return (
    <>
      <ModalBody p="2">
        <FormControl>
          <FormLabel mb="8px" fontSize="sm">
            Transportation name:
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

export default EditGroundTransportationForm;
