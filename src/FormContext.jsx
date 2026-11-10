/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("contact");

  const openForm = (type = "contact") => {
    setFormType(type);
    setIsOpen(true);
  };
  const closeForm = () => setIsOpen(false);
  const toggleForm = () => setIsOpen((prev) => !prev);

  return (
    <FormContext.Provider
      value={{ isOpen, formType, openForm, closeForm, toggleForm }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
