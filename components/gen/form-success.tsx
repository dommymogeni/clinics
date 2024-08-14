import { SiTicktick } from "react-icons/si";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm font-semibold text-emerald-950">
      <SiTicktick className="h4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
