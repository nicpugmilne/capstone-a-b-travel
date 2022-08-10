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
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'  
import ItineraryModuleItem from './ItineraryModuleItem';

function ItineraryModuleContainer(){

    const modules = [{
            id: 1,
            module_type: 'flight',
            itinerary_id: 1,
            name: 'AirNZ 1',
            start_datetime: '2018-25-12',
            end_datetime: '2018-25-12',
            duration: 160,
            cost: '1200'
        },
        {
            id: 2,
            module_type: 'hotel',
            itinerary_id: 1,
            name: 'Santa Monica Proper',
            start_datetime: '2018-25-12',
            end_datetime: '2018-25-12',
            duration: null,
            cost: '250'
        },
        {
            id: 3,
            module_type: 'car',
            itinerary_id: 1,
            name: 'Apex',
            start_datetime: '2018-25-12',
            end_datetime: '2018-25-12',
            duration: null,
            cost: '380'
        }
    ]

    const moduleItems = modules.map(module => {
        return (
            <ItineraryModuleItem key={module.id} module={module}></ItineraryModuleItem>
        )
    })

    return (
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <TableContainer>
                <Table size='sm'>
                <Thead>
                <Tr>
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
            mt={10}
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
            }}>
            Add module
            </Button>
      </Box>
    )
}

export default ItineraryModuleContainer;