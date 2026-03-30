import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import {
	Figtree,
	Montserrat,
	Poppins,
	Inter,
	Quicksand,
} from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { Providers } from "@/app/providers";
import en from "@/i18n/messages/en.json";
import uz from "@/i18n/messages/uz.json";
import ru from "@/i18n/messages/ru.json";

const figtree = Figtree({
	variable: "--font-figtree",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600"],
});

const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600"],
});

const metadataByLocale: Record<string, { title: string; description: string }> =
	{
		en: {
			title: "Terra Vista — Premium Residential Real Estate Developer",
			description:
				"Terra Vista creates exceptional living spaces with a strong focus on architecture, ecology, and long-term property value.",
		},
		uz: {
			title: "Terra Vista — Premium turar joy loyihalari ishlab chiqaruvchisi",
			description:
				"Terra Vista — arxitektura, ekologiya va uzoq muddatli qiymatga e’tibor qaratgan yuqori sifatli turar joy loyihalarini yaratuvchi kompaniya.",
		},
		ru: {
			title: "Terra Vista — Девелопер премиальной жилой недвижимости",
			description:
				"Terra Vista — девелопер жилой недвижимости с акцентом на архитектуру, экологию и долгосрочную ценность проектов.",
		},
	};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const meta = metadataByLocale[locale] || metadataByLocale.en;

	return {
		title: meta.title,
		description: meta.description,
		appleWebApp: {
			capable: true,
			statusBarStyle: "default",
			title: "Terra Vista",
		},
		icons: {
			icon: [
				{ url: "/favicon.ico", sizes: "any" },
				{ url: "/icon0.svg", type: "image/svg+xml" },
			],
			apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
		},
		manifest: "/manifest.json",
	};
}

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!locales.includes(locale as any)) {
		notFound();
	}

	const messagesMap = { en, uz, ru };
	const messages = messagesMap[locale as keyof typeof messagesMap];

	return (
		<html
			lang={locale}
			className={`${figtree.variable} ${montserrat.variable} ${poppins.variable} ${inter.variable} ${quicksand.variable}`}
		>
			<body className="antialiased">
				<Providers
					locale={locale}
					messages={messages}
				>
					{children}
				</Providers>
			</body>
		</html>
	);
}
