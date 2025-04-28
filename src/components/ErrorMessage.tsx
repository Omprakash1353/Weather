import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <div
      data-testid="error-container"
      className="bg-red-100 text-red-700 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-lg shadow-md text-center w-full flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base"
    >
      <span data-testid="error-icon">
        <AlertCircle
          data-testid="error-icon-sm"
          size={16}
          className="sm:hidden"
        />
        <AlertCircle
          data-testid="error-icon-md"
          size={18}
          className="hidden sm:block md:hidden"
        />
        <AlertCircle
          data-testid="error-icon-lg"
          size={20}
          className="hidden md:block"
        />
      </span>
      {message}
    </div>
  );
};

export default ErrorMessage;
