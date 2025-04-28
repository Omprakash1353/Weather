export function errorParser(error: unknown): string {
  if (typeof error === "object" && error !== null) {
    if (
      "message" in error &&
      typeof (error as Record<string, string>).message === "string"
    ) {
      return (error as Record<string, string>).message;
    }
    return JSON.stringify(error);
  } else if (typeof error === "string") {
    return error;
  } else {
    return String(error);
  }
}
