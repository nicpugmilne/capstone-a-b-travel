import { Text, Stack } from "@chakra-ui/react";

export default function ItinerarySummary({ itinerary }) {
  return (
    <Stack align={"center"} justify={"center"} m="5">
      <Text fontSize={"lg"}>Summary:</Text>
      <Text fontSize={"sm"} fontWeight={500}>
        Total Cost: ${itinerary.total_cost}
      </Text>
      <Text fontSize={"sm"} fontWeight={500}>
        Dates: {itinerary.itinerary_start_date} - {itinerary.itinerary_end_date}
      </Text>
      <Text fontSize={"sm"} fontWeight={500}>
        Travel time: {(itinerary.travel_time / 60).toPrecision(3)} hrs
      </Text>
    </Stack>
  );
}
