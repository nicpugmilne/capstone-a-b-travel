import { createContext, useState } from "react";

export const HotelFormContext = createContext();

export const HotelFormProvider = ({ children }) => {
  const [hotelNameValue, setHotelNameValue] = useState("");
  const [hotelStartDateValue, setHotelStartDateValue] = useState("");
  const [hotelEndDateValue, setHotelEndDateValue] = useState("");
  const [hotelCostValue, setHotelCostValue] = useState();
  const [hotelNotesValue, setHotelNotesValue] = useState("");

  const value = {
    hotelNameValue,
    setHotelNameValue,
    hotelStartDateValue,
    setHotelStartDateValue,
    hotelEndDateValue,
    setHotelEndDateValue,
    hotelCostValue,
    setHotelCostValue,
    hotelNotesValue,
    setHotelNotesValue,
  };

  return (
    <HotelFormContext.Provider value={value}>
      {children}
    </HotelFormContext.Provider>
  );
};
