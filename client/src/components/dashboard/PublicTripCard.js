import { Image, Text, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import PublicTripModuleTable from "./PublicTripModuleTable";
import { UserContext } from "../../context/UserContext";

export default function PublicTripCard({ trip }) {
  const { user } = useContext(UserContext);
  const history = useHistory();
  function cloneTrip() {
    let clonedTrip = {};
    clonedTrip.user_id = user.id;
    clonedTrip.name = trip.trip.name;
    clonedTrip.image_url = trip.trip.image_url;

    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(clonedTrip),
    })
      .then((r) => r.json())
      .then((newTrip) => {
        cloneItinerary(newTrip.id);
        history.push(`/trips`);
      });
  }

  function cloneItinerary(newTripId) {
    let clonedItinerary = {};
    clonedItinerary.trip_id = newTripId;
    clonedItinerary.name = trip.name;
    clonedItinerary.is_favorite = false;
    clonedItinerary.is_published = false;
    fetch("/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(clonedItinerary),
    })
      .then((r) => r.json())
      .then((clonedItinerary) => cloneModules(clonedItinerary.id, newTripId));
  }

  function cloneModules(newItineraryId, newTripId) {
    trip.itinerary_modules.forEach((module) => {
      let clonedModule = {};
      clonedModule.module_type_id = module.module_type.id;
      clonedModule.itinerary_id = newItineraryId;
      clonedModule.name = module.name;
      clonedModule.start_datetime = module.start_date;
      clonedModule.end_datetime = module.end_date;
      clonedModule.duration = module.duration;
      clonedModule.cost = module.cost;

      fetch("/itinerary_modules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(clonedModule),
      }).then((r) => r.json());
    });
  }

  return (
    <Flex
      width={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "50%", // 48em-62em
        "30%", // 62em+
      ]}
      direction={"column"}
      justifyContent={"space-between"}
      boxShadow={"lg"}
      rounded={"2xl"}
      bg={useColorModeValue("white", "gray.800")}
      pos={"relative"}
    >
      <Flex direction={"column"} flex="0">
        <Image
          height={"250px"}
          width={"full"}
          objectFit={"cover"}
          src={trip.trip.image_url}
          borderTopRadius="2xl"
        />
        <Flex justify={"center"} fontSize="2xl" m="3">
          {trip.trip.name}
        </Flex>
        <PublicTripModuleTable
          modules={trip.itinerary_modules}
        ></PublicTripModuleTable>
      </Flex>
      <Flex
        direction={"column"}
        justifySelf={"flex-bottom"}
        alignItems="center"
      >
        <Text fontSize="md" mt="3">
          Dates: {trip.itinerary_start_date} - {trip.itinerary_end_date}
        </Text>
        <Text fontSize="md">Total cost: ${trip.total_cost}</Text>
        <Button m="3" onClick={cloneTrip}>
          Clone Trip
        </Button>
      </Flex>
    </Flex>
  );
}
