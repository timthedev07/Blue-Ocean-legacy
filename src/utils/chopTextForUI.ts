/**
 * Cuts off the rest of the text after the `i`th character (0 indexed)
 * @param text
 * @param i
 */
export const chopTextForUI = (text: string, i: number = 18) => {
  return text.slice(0, i) + "...";
};

/**
 * Cuts off the rest of the text after the `i`th word (0 indexed)
 * @param text
 * @param i
 */
export const chopWordForUI = (text: string, i: number = 5) => {
  const words = text.split(" ");
  const remaining = words.slice(0, i);
  return remaining.join(" ") + (remaining.length !== words.length ? "..." : "");
};
