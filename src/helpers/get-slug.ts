export function getSlug(text: string): string {
  return text
    .replaceAll(/[^(a-z\s)]/gi, "")
    .split(" ")
    .join("-")
    .toLowerCase();
}