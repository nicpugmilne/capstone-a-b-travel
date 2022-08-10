import { Box, Heading, Spacer, Button, Flex } from "@chakra-ui/react";

function TripContainerHeader(){
    return (
        <Flex minWidth="max-content" p="4">
            <Box>
                <Heading size='xl'>My Trips</Heading>
            </Box>
            <Spacer/>
            <Box>
                <Button>Create a trip</Button>
            </Box>
        </Flex>
    )
}

export default TripContainerHeader;