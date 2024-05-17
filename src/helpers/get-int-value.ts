export function getIntValue(
  value: string | null,
  defaultValue: number
): number {
  return value === null || isNaN(parseInt(value))
    ? defaultValue
    : parseInt(value);
}
