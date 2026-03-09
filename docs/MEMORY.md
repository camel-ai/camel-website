# CAMEL Website Project Memory

## Stack

- Next.js 15 (App Router), React 18, TypeScript
- Tailwind CSS v4, Radix UI components (shadcn pattern)
- next-intl for i18n (added)

## Key File Locations

- Home page: `src/app/(main)/page.jsx` (client component)
- Hero component: `src/components/home/Hero.tsx` (client component)
- NavBar: `src/components/navigation/NavBar.tsx`
- Root layout: `src/app/layout.tsx` (server component, wraps with NextIntlClientProvider)
- i18n config: `src/i18n/config.ts`, `src/i18n/request.ts`
- Translation files: `messages/en.json`, `messages/zh.json`
- Language switcher: `src/components/LanguageSwitcher.tsx`

## i18n Setup (next-intl, cookie-based, no URL changes)

- Locale stored in `NEXT_LOCALE` cookie
- Supported locales: `en` (default), `zh`
- Only home page translated so far (Hero + page.jsx)
- To extend to other pages: add keys to messages/\*.json and use `useTranslations` in those components
- Language switcher visible in NavBar (desktop: Globe icon next to theme toggle; mobile: Language row in bottom actions)

### IMPORTANT: Do NOT use `getMessages()` from `next-intl/server` in layout.tsx

- `getMessages()` requires the plugin's webpack alias (`next-intl/config`) which breaks with Turbopack (Next.js 15 default dev server)
- Instead, read cookies + import messages directly in `layout.tsx` via `getLocaleAndMessages()` helper
- Use EXPLICIT imports (`locale === 'zh' ? import('zh.json') : import('en.json')`) not template literal dynamic imports — both are Turbopack-compatible

## Architecture Notes

- No URL-based locale routing — locale is cookie-driven, all URLs stay the same
- `getRequestConfig` in `src/i18n/request.ts` reads cookie server-side
- Client components use `useTranslations()`, server components would use `getTranslations()`
- Research paper titles and testimonial quotes intentionally NOT translated (proper names/original quotes)
