import { Switch, FormControl, FormLabel, Spacer } from "@chakra-ui/react";
import { useState } from "react";

export default function MakePublicToggle({ itinerary }) {
  const [isPublished, setIsPublished] = useState(itinerary.is_published);

  function handleToggle() {
    const updatedItinerary = { is_published: !isPublished };
    fetch(`/itineraries/${itinerary.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedItinerary),
    })
      .then((r) => r.json())
      .then(setIsPublished(!isPublished));
  }

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="make-public" mb="0">
        Make trip public?
      </FormLabel>
      <Spacer />
      {isPublished ? (
        <Switch
          id="make-public"
          size="md"
          onChange={handleToggle}
          defaultChecked
        />
      ) : (
        <Switch id="make-public" size="md" onChange={handleToggle} />
      )}
    </FormControl>
  );
}
