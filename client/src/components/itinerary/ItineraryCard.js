import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import ItineraryModuleContainer from './ItineraryModuleContainer';

function ItineraryCard({itinerary}){

    return (
        <Center py={6}>
        <Box
          maxW={'500px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
            <Text
              fontSize={'sm'}
              textAlign={'center'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              {itinerary.name}
            </Text>
            <ItineraryModuleContainer></ItineraryModuleContainer>
          <Box>
            <Stack align={'center'} justify={'center'} m='5'>
                <Text fontSize={'xl'}>Summary:</Text>
                <Text fontSize={'md'} fontWeight={500}>
                    Total Cost: {itinerary.total_cost}
                </Text>
                <Text fontSize={'md'} fontWeight={500}>
                    Dates: {itinerary.start_date} - {itinerary.end_date}
                </Text>
                <Text fontSize={'md'} fontWeight={500}>
                    Travel time: {itinerary.travel_time} hrs
                </Text>
            </Stack>
          </Box>
        </Box>
      </Center>
    )
}

export default ItineraryCard;