import { createContext } from "react";

const EducationContext = createContext("None");

export const EducationProvider = EducationContext.Provider;

export default EducationContext;
