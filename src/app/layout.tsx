import type { Metadata } from "next";
import {
	Figtree,
	Montserrat,
	Poppins,
	Inter,
	Quicksand,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
	title: "Terra Vista — Девелопер жилой недвижимости",
	description:
		"Terra Vista — девелопер жилой недвижимости с фокусом на архитектуру, экологию и долгосрочную ценность проектов.",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Soliev & Co",
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

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="ru"
			className={`${figtree.variable} ${montserrat.variable} ${poppins.variable} ${inter.variable} ${quicksand.variable}`}
		>
			<body className="antialiased">{children}</body>
		</html>
	);
}
