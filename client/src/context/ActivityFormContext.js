import { createContext, useState } from "react";

export const ActivityFormContext = createContext();

export const ActivityFormProvider = ({ children }) => {
  const [activityNameValue, setActivityNameValue] = useState("");
  const [activityStartDateValue, setActivityStartDateValue] = useState("");
  const [activityEndDateValue, setActivityEndDateValue] = useState("");
  const [activityCostValue, setActivityCostValue] = useState();
  const [activityNotesValue, setActivityNotesValue] = useState("");

  const value = {
    activityNameValue,
    setActivityNameValue,
    activityStartDateValue,
    setActivityStartDateValue,
    activityEndDateValue,
    setActivityEndDateValue,
    activityCostValue,
    setActivityCostValue,
    activityNotesValue,
    setActivityNotesValue,
  };

  return (
    <ActivityFormContext.Provider value={value}>
      {children}
    </ActivityFormContext.Provider>
  );
};
