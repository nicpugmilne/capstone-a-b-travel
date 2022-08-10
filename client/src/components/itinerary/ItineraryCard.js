import {
    GridItem,
    Box,
    Center,
    Text,
    Stack,
    Icon,
    useColorModeValue,
    Flex,
    Spacer
  } from '@chakra-ui/react';
import {MdOutlineStarOutline} from 'react-icons/md'
import {MdModeEditOutline} from 'react-icons/md'
import {MdOutlineDeleteForever} from 'react-icons/md'
import ItineraryModuleContainer from './ItineraryModuleContainer';

function ItineraryCard({itinerary}){

  function handleFavorite(){
    alert('User clicked favorite button')
  }

  function handleEdit(){
    alert('User clicked edit button')
  }

  function handleDelete(){
    alert('User clicked delete button')
  }

    return (
      <GridItem>
        <Center py={6}>
          <Box
            maxW={'500px'}
            w={'full'}
            bg={useColorModeValue('gray.50', 'gray.500')}
            boxShadow={'lg'}
            rounded={'md'}
            >
              <Flex align={'center'} justify={'center'} m='5'>            
                  <Text
                      fontSize={'xl'}
                      fontWeight={500}
                      p={2}
                      px={3}>
                      {itinerary.name}
                  </Text>
                  <Icon as={MdOutlineStarOutline} ml='2' onClick={handleFavorite}></Icon>
                  <Spacer></Spacer>
                  <Icon as={MdModeEditOutline} onClick={handleEdit}></Icon>
                  <Icon as={MdOutlineDeleteForever} ml='5' onClick={handleDelete}></Icon>
              </Flex>
              <ItineraryModuleContainer></ItineraryModuleContainer>
            <Box>
              <Stack align={'center'} justify={'center'} mb='10'>
                  <Text fontSize={'lg'}>Summary:</Text>
                  <Text fontSize={'sm'} fontWeight={500}>
                      Total Cost: {itinerary.total_cost}
                  </Text>
                  <Text fontSize={'sm'} fontWeight={500}>
                      Dates: {itinerary.start_date} - {itinerary.end_date}
                  </Text>
                  <Text fontSize={'sm'} fontWeight={500}>
                      Travel time: {itinerary.travel_time} hrs
                  </Text>
              </Stack>
            </Box>
          </Box>
        </Center>
      </GridItem>
    )
}

export default ItineraryCard;