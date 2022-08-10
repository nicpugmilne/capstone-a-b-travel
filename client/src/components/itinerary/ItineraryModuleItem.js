import { Tr, Td, Icon } from '@chakra-ui/react'
import {MdFlight} from 'react-icons/md'
import {MdHotel} from 'react-icons/md'
import {MdDirectionsCar} from 'react-icons/md'
import {MdLocalActivity} from 'react-icons/md'


function ItineraryModuleItem({module}){
    let icon
    if (module.module_type_id === 1){
        icon = MdFlight
    } else if (module.module_type_id === 2){
        icon = MdHotel
    } else if (module.module_type_id === 3){
        icon = MdDirectionsCar
    } else {icon = MdLocalActivity}


    return (     
            <Tr>
                <Td><Icon as={icon}/></Td>
                <Td>{module.start_datetime} - {module.end_datetime}</Td>
                <Td>{module.name}</Td>
                <Td>{module.duration}</Td>
                <Td>${module.cost}</Td>
            </Tr>
    )
}

export default ItineraryModuleItem;