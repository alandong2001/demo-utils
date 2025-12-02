/**
 * Utility functions for string manipulation
 */

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * Reverses the characters in a string
 * @param str - The string to reverse
 * @returns The reversed string
 * @example
 * ```typescript
 * reverseString("hello") // returns "olleh"
 * reverseString("world") // returns "dlrow"
 * ```
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
