export const clearStringFrom = (
  inputString: string,
  symbolsToRemove: string[]
) => {
  const regex = new RegExp(`[${symbolsToRemove.join("")}]`, "g");
  return inputString.replace(regex, "");
};
