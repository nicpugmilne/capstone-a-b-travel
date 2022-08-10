// https://chakra-ui.com/docs/styled-system/responsive-styles

import { Box, Flex, Heading, Spacer, Button, Container, SimpleGrid } from "@chakra-ui/react";
import TripCard from "./TripCard";
import TripContainerHeader from "./TripContainerHeader";

function TripsContainer(){

    const trips = [{
        id: 1,
        name: 'Barcelona',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/9zHVj4OnM5pYeO8rCX-W4aL-lw0=/0x0:4428x1993/1200x800/filters:focal(1872x1198:2580x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/63371518/shutterstock_785442694.0.jpg',
        }, {
        id: 2,
        name: 'Denver',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Denver_Skyline_in_Winter.JPG/800px-Denver_Skyline_in_Winter.JPG',
        },
        {
        id: 3,
        name: 'Auckland',
        imageUrl: 'https://imgix.theurbanlist.com/content/article/Cornwall_Park_Didier_Marti_Getty.jpg?auto=format,compress&w=520&h=390&fit=crop',
        },
        {
        id: 4,
        name: 'Auckland',
        imageUrl: 'https://imgix.theurbanlist.com/content/article/Cornwall_Park_Didier_Marti_Getty.jpg?auto=format,compress&w=520&h=390&fit=crop'  
        },
        {
            id: 5,
            name: 'Auckland',
            imageUrl: 'https://imgix.theurbanlist.com/content/article/Cornwall_Park_Didier_Marti_Getty.jpg?auto=format,compress&w=520&h=390&fit=crop'  
            }
        
    ]
    
    const tripCards = trips.map(trip => {
        return (
            <TripCard key ={trip.id} trip={trip}></TripCard>
        )
    })

    return (
        <Box>
            <TripContainerHeader/>
            <SimpleGrid minChildWidth='280px' spacingX='40px' spacingY='10px'>
                {tripCards}
            </SimpleGrid>
        </Box>
    )
}

export default TripsContainer;