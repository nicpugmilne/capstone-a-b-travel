import {
  Text,
  Icon,
  Flex,
  Spacer,
  Tooltip,
  Input,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import ItineraryModuleContainer from "./ItineraryModuleContainer";
import { useState, useEffect } from "react";
import ItinerarySummary from "./ItinerarySummary";
import MakePublicToggle from "./MakePublicToggle";

function ItineraryCard({
  itinerary,
  setModalOpen,
  handleDeleteItinerary,
  updateItineraryCard,
}) {
  const [modules, setModules] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itineraryName, setItineraryNameValue] = useState("");

  useEffect(() => {
    setModules(itinerary.itinerary_modules);
  }, []);

  function handleNameInputChange(e) {
    setItineraryNameValue(e.target.value);
  }

  function handleDelete() {
    fetch(`/itineraries/${itinerary.id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(handleDeleteItinerary(itinerary.id));
  }

  function handleAddModule(newModule) {
    setModules([...modules, newModule]);
    //update the total_cost and travel_time key value pairs
    let updatedItinerary = itinerary;
    updatedItinerary.total_cost = itinerary.total_cost + newModule.cost;
    updatedItinerary.travel_time = itinerary.travel_time + newModule.duration;
    updatedItinerary.itinerary_start_date = handleStartDateUpdate(
      newModule.start_date
    );
    updatedItinerary.itinerary_end_date = handleEndDateUpdate(
      newModule.end_date
    );
    updateItineraryCard(updatedItinerary);
  }

  function handleRemoveModuleItem(deletedItem) {
    const updatedModules = modules.filter(
      (module) => module.id !== deletedItem.id
    );
    setModules(updatedModules);
    let updatedItinerary = itinerary;
    //update the total_cost and travel_time key value pairs
    updatedItinerary.total_cost = itinerary.total_cost - deletedItem.cost;
    updatedItinerary.travel_time = itinerary.travel_time - deletedItem.duration;
    updateItineraryCard(updatedItinerary);
  }

  function handleEditModuleItem(changedModule, oldCost, oldTravelTime) {
    const updatedModulesList = modules.map((module) => {
      if (module.id === changedModule.id) {
        return changedModule;
      } else {
        return module;
      }
    });

    setModules(updatedModulesList);
    //update the total_cost and travel_time key value pairs as well as date summary
    let updatedItinerary = itinerary;
    updatedItinerary.total_cost =
      itinerary.total_cost - oldCost + changedModule.cost;
    updatedItinerary.travel_time =
      itinerary.travel_time - oldTravelTime + changedModule.duration;
    updatedItinerary.itinerary_start_date = handleStartDateUpdate(
      changedModule.start_date
    );
    updatedItinerary.itinerary_end_date = handleEndDateUpdate(
      changedModule.end_date
    );
    updateItineraryCard(updatedItinerary);
  }

  function handleItineraryNameUpdate() {
    const updatedItinerary = { name: itineraryName };
    fetch(`/itineraries/${itinerary.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedItinerary),
    })
      .then((r) => r.json())
      .then((itinerary) => updateItineraryCard(itinerary));
    setIsEditing(!isEditing);
  }

  function handleStartDateUpdate(updatedStartDate) {
    console.log(updatedStartDate);
    console.log(itinerary.itinerary_start_date);
    if (
      Date.parse(updatedStartDate) < Date.parse(itinerary.itinerary_start_date)
    ) {
      return updatedStartDate;
    } else {
      return itinerary.itinerary_start_date;
    }
  }

  function handleEndDateUpdate(updatedEndDate) {
    console.log(updatedEndDate);
    console.log(itinerary.itinerary_end_date);
    if (Date.parse(updatedEndDate) > Date.parse(itinerary.itinerary_end_date)) {
      return updatedEndDate;
    } else {
      return itinerary.itinerary_end_date;
    }
  }

  const isError = itineraryName === "";

  return (
    <Flex
      width={[
        "100%", // 0-30em
        "50%", // 30em-48em
        "50%", // 48em-62em
        "32%", // 62em+
      ]}
      bg="blackAlpha.50"
      direction={"column"}
      justifyContent={"space-between"}
      boxShadow={"lg"}
      rounded={"2xl"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Flex direction={"column"} flex="0" alignContent={"center"}>
        {isEditing ? (
          <InputGroup>
            <Input
              isInvalid={isError}
              placeholder="Set new trip name"
              value={itineraryName}
              onChange={handleNameInputChange}
              m={3}
            />
            {!isError ? (
              <InputRightElement
                m={3}
                children={
                  <Icon
                    as={MdCheck}
                    color="green.500"
                    onClick={handleItineraryNameUpdate}
                  />
                }
              />
            ) : (
              <InputRightElement
                m={3}
                children={
                  <Icon
                    as={MdOutlineCancel}
                    color="red.500"
                    onClick={() => setIsEditing(false)}
                  />
                }
              />
            )}
          </InputGroup>
        ) : (
          <Flex m={3}>
            <Text fontSize={"xl"} fontWeight={500} p={2} px={3}>
              {itinerary.name}
            </Text>
            <Spacer></Spacer>
            <ButtonGroup>
              <Tooltip label="Edit name" placement="bottom">
                <IconButton
                  icon={<MdModeEditOutline />}
                  onClick={() => setIsEditing(!isEditing)}
                  _hover={{
                    bg: "green.100",
                  }}
                  _focus={{
                    bg: "green.100",
                  }}
                ></IconButton>
              </Tooltip>
              <Tooltip label="Delete itinerary" placement="bottom">
                <IconButton
                  icon={<MdOutlineDeleteForever />}
                  onClick={handleDelete}
                  _hover={{
                    bg: "red.100",
                  }}
                  _focus={{
                    bg: "red.100",
                  }}
                ></IconButton>
              </Tooltip>
            </ButtonGroup>
          </Flex>
        )}
        <ItineraryModuleContainer
          setModalOpen={setModalOpen}
          modules={modules}
          itineraryId={itinerary.id}
          handleAddModule={handleAddModule}
          handleRemoveModuleItem={handleRemoveModuleItem}
          handleEditModuleItem={handleEditModuleItem}
        ></ItineraryModuleContainer>
      </Flex>
      <Flex
        direction={"column"}
        justifySelf={"flex-bottom"}
        alignItems="center"
        mb={5}
      >
        {modules.length > 0 ? (
          <>
            <Divider />
            <ItinerarySummary itinerary={itinerary}></ItinerarySummary>
            <Divider mb={5} />
            <MakePublicToggle itinerary={itinerary} />
          </>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default ItineraryCard;
