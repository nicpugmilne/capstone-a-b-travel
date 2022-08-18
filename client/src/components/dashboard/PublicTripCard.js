import {
  Center,
  Box,
  useColorModeValue,
  Image,
  Text,
  GridItem,
} from "@chakra-ui/react";
import PublicTripModuleTable from "./PublicTripModuleTable";

export default function PublicTripCard({ trip }) {
  console.log(trip);
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
      </Box>
    </GridItem>
  );
}
