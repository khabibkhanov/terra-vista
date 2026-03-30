<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project: Terra Vista

Landing page for a premium real estate developer.

### Stack
- **Next.js 16.2.1** (Turbopack, App Router)
- **React 19**
- **Tailwind CSS v4** (`@import "tailwindcss"` in globals.css — no tailwind.config.ts)
- **next-intl 4.x** — i18n with 3 locales: `uz`, `ru`, `en` (default: `uz`)
- **TypeScript 5** — strict mode

### Key conventions
- `src/proxy.ts` — NOT `middleware.ts` (renamed in Next.js 16, same API)
- `src/i18n/request.ts` — next-intl server config, `timeZone: "UTC"` set
- `src/app/providers.tsx` — `NextIntlClientProvider` with `timeZone="UTC"`
- `src/app/[locale]/layout.tsx` — locale layout with `data-scroll-behavior="smooth"` on `<html>`
- `src/lib/assets.ts` — all image/icon paths exported as constants
- `@/*` path alias maps to `src/*`
- Fonts: Figtree (`--font-figtree`), Montserrat (`--font-montserrat`), Poppins (`--font-poppins`)

### Section IDs (for anchor navigation)
- `#home` — Hero
- `#about` — About
- `#projects` — Gallery
- `#services` — Services
- `#location` — Location (manzil/contacts) ← "Biz bilan bog'laning" scrolls here
- `#contact` — Footer (do NOT use for contact buttons)
