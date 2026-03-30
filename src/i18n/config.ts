export type Locale = (typeof locales)[number];

export const locales = ["en", "uz", "ru"] as const;
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
	en: "English",
	uz: "Oʻzbekcha",
	ru: "Русский",
};
