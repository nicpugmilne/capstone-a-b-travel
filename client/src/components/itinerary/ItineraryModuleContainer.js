import {
    Box,
    Button,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'  
import ItineraryModuleItem from './ItineraryModuleItem';

function ItineraryModuleContainer({setModalOpen}){

    const modules = [{
            id: 1,
            module_type_id: 1,
            itinerary_id: 1,
            name: 'AirNZ 1',
            start_datetime: 'Sep 12',
            end_datetime: 'Sep 25',
            duration: 160,
            cost: '1200'
        },
        {
            id: 2,
            module_type_id: 2,
            itinerary_id: 1,
            name: 'Hilton',
            start_datetime: 'Sep 12',
            end_datetime: 'Sep 25',
            duration: null,
            cost: '250'
        },
        {
            id: 3,
            module_type_id: 3,
            itinerary_id: 1,
            name: 'Apex',
            start_datetime: 'Sep 12',
            end_datetime: 'Sep 25',
            duration: null,
            cost: '380'
        },
        {
            id: 4,
            module_type_id: 4,
            itinerary_id: 1,
            name: 'Hike Mt Doom',
            start_datetime: 'Sep 12',
            end_datetime: 'Sep 25',
            duration: null,
            cost: '0'
        }
    ]

    const moduleItems = modules.map(module => {
        return (
            <ItineraryModuleItem key={module.id} module={module}></ItineraryModuleItem>
        )
    })

    function handleClick(){
        setModalOpen(true)
    }

    return (
        <Box px={2} py={2}>
            <TableContainer>
                <Table size='sm' variant='unstyled'>
                <Thead>
                <Tr>
                    <Th></Th>
                    <Th>Date</Th>
                    <Th>Name</Th>
                    <Th>Duration</Th>
                    <Th>Cost</Th>
                </Tr>
                </Thead>
                <Tbody>
                {moduleItems}
                </Tbody>
                </Table>
            </TableContainer>
            <Button
            my={8}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
                bg: 'green.500',
            }}
            _focus={{
                bg: 'green.500',
            }}
            onClick={handleClick}>
            Add to trip
            </Button>
      </Box>
    )
}

export default ItineraryModuleContainer;