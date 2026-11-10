import { useFormContext } from "../../FormContext";
import "./ButtonСalculation.css";

export function ButtonCalculation({ text, formType = "contact" }) {
  const { openForm } = useFormContext();

  return (
    <>
      <button
        type="button"
        className="ButtonСalculation text-sm font-semiBold white"
        onClick={() => openForm(formType)}
      >
        {text}
      </button>
    </>
  );
}
