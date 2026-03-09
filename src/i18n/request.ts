import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, locales } from "./config";

export default getRequestConfig(async () => {
  const headerStore = await headers();
  const urlLocale = headerStore.get("x-next-locale");
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = locales.includes(urlLocale as (typeof locales)[number])
    ? (urlLocale as string)
    : locales.includes(cookieLocale as (typeof locales)[number])
      ? (cookieLocale as string)
      : defaultLocale;

  // Explicit imports so webpack/Turbopack can statically resolve the files
  const messageLoaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
    en: () => import("../../messages/en.json"),
    zh: () => import("../../messages/zh.json"),
    ja: () => import("../../messages/ja.json"),
  };
  const loader = messageLoaders[locale] ?? messageLoaders.en;
  const loaded = await loader();
  const messages = loaded.default ?? loaded;

  return {
    locale,
    messages,
  };
});
