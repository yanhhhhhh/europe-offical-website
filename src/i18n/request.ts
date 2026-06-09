import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { isLocale } from "@/constants/navigation";

type Messages = Record<string, unknown>;

function mergeMessages(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };

  for (const [key, value] of Object.entries(override)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      base[key] &&
      typeof base[key] === "object" &&
      !Array.isArray(base[key])
    ) {
      result[key] = mergeMessages(base[key] as Messages, value as Messages);
    } else {
      result[key] = value;
    }
  }

  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && isLocale(requested) ? requested : routing.defaultLocale;
  const defaultMessages = (await import("../../messages/en.json")).default;
  const localeMessages =
    locale === routing.defaultLocale ? {} : (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: mergeMessages(defaultMessages, localeMessages),
  };
});
