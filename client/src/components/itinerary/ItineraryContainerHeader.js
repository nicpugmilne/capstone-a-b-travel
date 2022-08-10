import { Box, Heading, Spacer, Button, Flex } from "@chakra-ui/react";

function ItineraryContainerHeader(){
    return (
        <Flex minWidth="max-content" p="4" justifyContent='space-between'>
            <Box>
                <Button>Back to All Trips</Button>
            </Box>
            <Box>
                <Heading size='lg'>Trip Title</Heading>
            </Box>
            <Box>
                <Button>Create new Itinerary</Button>
            </Box>
        </Flex>
    )
}

export default ItineraryContainerHeader;