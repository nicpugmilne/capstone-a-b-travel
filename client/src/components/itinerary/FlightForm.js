import {
    ModalBody,
    Input,
    Select,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  
  function FlightForm(){
    return (
        <ModalBody>
        <form id="create-form">
          <FormControl>
            <FormLabel mb="8px">Name:</FormLabel>
            <Input
              value= 'A'
              onChange={console.log('there was a change')}
              placeholder="Eg. Tom's pickleball court"
              size="sm"
            />
            <FormLabel mb="8px">Sport type:</FormLabel>
            <Select
              placeholder="Select sport type"
              onChange={console.log('there was a change')}
            >
              <option value="1">Pickleball</option>
              <option value="2">Tennis</option>
              <option value="3">Soccer</option>
              <option value="4">Ultimate</option>
              <option value="5">Kickball</option>
            </Select>
          </FormControl>
        </form>
      </ModalBody>
    )
}

export default FlightForm;