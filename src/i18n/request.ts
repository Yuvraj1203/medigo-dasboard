import { getRequestConfig } from "next-intl/server";

export enum LocaleEnum {
  en = "en",
  hi = "hi",
}

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = "en";

  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
