export function getSlug(text: string): string {
  return text
    .replaceAll(/[^(a-z\s0-9)]/gi, "")
    .split(" ")
    .join("-")
    .toLowerCase();
}