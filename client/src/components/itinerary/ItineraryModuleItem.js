import { Tr, Td } from '@chakra-ui/react'

function ItineraryModuleItem({module}){
    return (     
            <Tr>
                <Td>{module.start_datetime} - {module.end_datetime}</Td>
                <Td>{module.name}</Td>
                <Td>{module.duration}</Td>
                <Td>{module.cost}</Td>
            </Tr>
    )
}

export default ItineraryModuleItem;