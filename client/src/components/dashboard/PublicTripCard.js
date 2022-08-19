import {
  Center,
  Box,
  useColorModeValue,
  Image,
  Text,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import PublicTripModuleTable from "./PublicTripModuleTable";
import { UserContext } from "../../context/UserContext";

export default function PublicTripCard({ trip }) {
  const { user } = useContext(UserContext);
  function cloneTrip() {
    let clonedTrip = {};
    clonedTrip.user_id = user.id;
    clonedTrip.name = trip.trip.name;
    clonedTrip.image_url = trip.trip.image_url;
    console.log(clonedTrip);

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
      });
  }

  function cloneItinerary(newTripId) {
    let clonedItinerary = {};
    clonedItinerary.trip_id = newTripId;
    clonedItinerary.name = trip.name;
    clonedItinerary.is_favorite = false;
    clonedItinerary.is_published = false;
    console.log(clonedItinerary);
    fetch("/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(clonedItinerary),
    })
      .then((r) => r.json())
      .then((clonedItinerary) => cloneModules(clonedItinerary.id));
  }

  function cloneModules(newItineraryId) {
    trip.itinerary_modules.forEach((module) => {
      let clonedModule = {};
      clonedModule.module_type_id = module.module_type.id;
      clonedModule.itinerary_id = newItineraryId;
      clonedModule.name = module.name;
      clonedModule.start_datetime = module.start_date;
      clonedModule.end_datetime = module.end_date;
      clonedModule.duration = module.duration;
      clonedModule.cost = module.cost;
      // console.log(clonedModule);

      fetch("/itinerary_modules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(clonedModule),
      })
        .then((r) => r.json())
        .then((newModule) => {
          console.log(newModule);
        });
    });
  }

  return (
    <GridItem>
      <Box
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        {/* <Box> */}
        <Image
          rounded={"lg"}
          height={"120px"}
          width={"full"}
          objectFit={"cover"}
          src={trip.trip.image_url}
        ></Image>
        {/* </Box> */}
        <Box>
          <Center>
            <Text>{trip.trip.name}</Text>
          </Center>
          <PublicTripModuleTable
            modules={trip.itinerary_modules}
          ></PublicTripModuleTable>
        </Box>
        <Box>
          <Text>
            Dates: {trip.itinerary_start_date} - {trip.itinerary_end_date}
          </Text>
          <Text>Total cost: ${trip.total_cost}</Text>
        </Box>
        <Box>
          <Button onClick={cloneTrip}>Clone Trip</Button>
        </Box>
      </Box>
    </GridItem>
  );
}
