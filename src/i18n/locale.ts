export type SupportedLocale = "ar" | "en";
export const LOCALE_COOKIE = "splitz-locale";
export const DEFAULT_LOCALE: SupportedLocale = "ar";

export function toSupportedLocale(value: unknown): SupportedLocale {
  return value === "en" ? "en" : DEFAULT_LOCALE;
}
