import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { cookies, headers } from "next/headers";
import { locales, defaultLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

const palatino = localFont({
  src: [
    {
      path: "../../public/font/Palatino LT Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Palatino LT Light Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/Palatino LT Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Palatino LT Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Palatino LT Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Palatino LT Medium Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/Palatino LT Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Palatino LT Bold Italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/Palatino LT Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/Palatino LT Black Italic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-palatino",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camel-ai.org"),
  title: {
    default: "CAMEL-AI | Finding the Scaling Laws of Agents",
    template: "%s | CAMEL-AI",
  },
  description:
    "CAMEL-AI.org is the 1st LLM multi-agent framework and an open-source community dedicated to finding the scaling law of agents.",
  keywords: [
    "CAMEL-AI",
    "multi-agent",
    "AI agents",
    "data generation",
    "world simulation",
    "task automation",
    "artificial intelligence",
    "open-source",
    "LLM",
    "scaling laws",
    "agent framework",
  ],
  authors: [{ name: "CAMEL-AI", url: "https://www.camel-ai.org" }],
  creator: "CAMEL-AI",
  publisher: "CAMEL-AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.camel-ai.org/",
    siteName: "CAMEL-AI",
    title: "CAMEL-AI | Finding the Scaling Laws of Agents",
    description:
      "CAMEL-AI is an open-source community for finding the scaling laws of agents for data generation, world simulation, task automation.",
    images: [
      {
        url: "/image/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "CAMEL-AI - Finding the Scaling Laws of Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@camel_ai",
    creator: "@camel_ai",
    title: "CAMEL-AI | Finding the Scaling Laws of Agents",
    description:
      "CAMEL-AI is an open-source community for finding the scaling laws of agents for data generation, world simulation, task automation.",
    images: {
      url: "/image/thumbnail.png",
      alt: "CAMEL-AI - Finding the Scaling Laws of Agents",
    },
  },
  alternates: {
    canonical: "https://www.camel-ai.org/",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "CAMEL-AI",
    "application-name": "CAMEL-AI",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

async function getLocaleAndMessages(): Promise<{
  locale: Locale;
  messages: Record<string, unknown>;
}> {
  const headerStore = await headers();
  const urlLocale = headerStore.get("x-next-locale");
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  // Prefer locale from URL (set by middleware), then cookie, then default
  const locale: Locale = locales.includes(urlLocale as Locale)
    ? (urlLocale as Locale)
    : locales.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : defaultLocale;

  // Explicit imports let both webpack and Turbopack statically resolve the files
  const messageLoaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
    en: () => import("../../messages/en.json"),
    zh: () => import("../../messages/zh.json"),
    ja: () => import("../../messages/ja.json"),
  };
  const loader = messageLoaders[locale] ?? messageLoaders.en;
  const loaded = await loader();
  const messages = (loaded.default ?? loaded) as Record<string, unknown>;

  return { locale, messages };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { locale, messages } = await getLocaleAndMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${inconsolata.variable} ${palatino.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="bg-background mx-auto flex flex-col">
              <div className="flex-1">
                {children}
                <Toaster />
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
