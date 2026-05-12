"use client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      {t("Welcome")}
    </h1>
  );
}
