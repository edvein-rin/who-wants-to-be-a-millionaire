import { ZodError } from "zod";

export const errorToErrorMessage = (
  error: unknown,
  fallbackMessage = "Unexpected error"
): string => {
  if (error instanceof ZodError) {
    return error.errors
      .map((error) => `${error.path.join(".")} - ${error.message}`)
      .join("\n");
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
};
