import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm font-semibold text-destructive">
      <FaExclamationTriangle className="h4 w-4"/>
      <p>{message}</p>
    </div>
  );
};

export default FormError;
