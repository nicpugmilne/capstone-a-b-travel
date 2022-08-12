import { createContext, useState } from "react";

export const ActivityFormContext = createContext();

export const ActivityFormProvider = ({ children }) => {
  const [nameValue, setNameValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [costValue, setCostValue] = useState();
  const [notesValue, setNotesValue] = useState("");

  const value = {
    nameValue,
    setNameValue,
    startDateValue,
    setStartDateValue,
    endDateValue,
    setEndDateValue,
    costValue,
    setCostValue,
    notesValue,
    setNotesValue,
  };

  return (
    <ActivityFormContext.Provider value={value}>
      {children}
    </ActivityFormContext.Provider>
  );
};
