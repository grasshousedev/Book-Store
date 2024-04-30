export function truncate(text: string, maxLength: number) {
  return text.length > maxLength - 3
    ? text.substring(0, maxLength - 3) + "..."
    : text;
}