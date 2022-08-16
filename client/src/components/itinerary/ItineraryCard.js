import {
  GridItem,
  Box,
  Center,
  Text,
  Icon,
  useColorModeValue,
  Flex,
  Spacer,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// import { MdOutlineStarOutline } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import ItineraryModuleContainer from "./ItineraryModuleContainer";
import { useState, useEffect } from "react";
import ItinerarySummary from "./ItinerarySummary";

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
    updateItineraryCard(updatedItinerary);
  }

  function handleRemoveModuleItem(deletedItemId) {
    const updatedModules = modules.filter(
      (module) => module.id !== deletedItemId
    );
    setModules(updatedModules);
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

  return (
    <GridItem className="problemChild">
      <Center py={6}>
        <Box
          maxW={"500px"}
          minH={"550px"}
          w={"full"}
          bg={useColorModeValue("gray.50", "gray.500")}
          boxShadow={"lg"}
          rounded={"md"}
          m={"auto"}
          className="secondProblem"
        >
          <Flex align={"center"} m="5">
            {isEditing ? (
              <InputGroup>
                <Input
                  placeholder="Set new trip name"
                  value={itineraryName}
                  onChange={handleNameInputChange}
                />
                <InputRightElement
                  children={
                    <Icon
                      as={MdCheck}
                      color="green.500"
                      onClick={handleItineraryNameUpdate}
                    />
                  }
                />
              </InputGroup>
            ) : (
              <>
                <Text fontSize={"xl"} fontWeight={500} p={2} px={3}>
                  {itinerary.name}
                </Text>
                <Spacer></Spacer>
                <Icon
                  as={MdModeEditOutline}
                  onClick={() => setIsEditing(!isEditing)}
                ></Icon>
                <Icon
                  as={MdOutlineDeleteForever}
                  ml="5"
                  onClick={handleDelete}
                ></Icon>
              </>
            )}
          </Flex>
          <ItineraryModuleContainer
            setModalOpen={setModalOpen}
            modules={modules}
            itineraryId={itinerary.id}
            handleAddModule={handleAddModule}
            handleRemoveModuleItem={handleRemoveModuleItem}
          ></ItineraryModuleContainer>
          <Box>
            <ItinerarySummary itinerary={itinerary}></ItinerarySummary>
          </Box>
        </Box>
      </Center>
    </GridItem>
  );
}

export default ItineraryCard;
