import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  GridItem,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function TripCard({ trip }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/trips/${trip.id}`);
  }

  return (
    <GridItem>
      <Center py={12} onClick={handleClick}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          rounded={"lg"}
          pos={"relative"}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={trip.image_url}
            />
          </Box>
          <Stack pt={6} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {trip.name}
            </Heading>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  );
}

export default TripCard;
