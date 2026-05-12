import { LayoutTypes } from "@/types";
import { NextIntlClientProvider } from "next-intl";

const ServerProvider = ({ children }: LayoutTypes) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

export default ServerProvider;
