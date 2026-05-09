import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const loaded = await import("../../messages/en.json");
  const messages = (loaded.default ?? loaded) as Record<string, unknown>;
  return { locale: "en", messages };
});
