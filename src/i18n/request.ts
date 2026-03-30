import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import en from "./messages/en.json";
import uz from "./messages/uz.json";
import ru from "./messages/ru.json";

const messages = { en, uz, ru };

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) {
		return {
			locale: "en",
			messages: en,
			timeZone: "UTC",
		};
	}

	return {
		locale: locale as string,
		messages: messages[locale as keyof typeof messages],
		timeZone: "UTC",
	};
});
