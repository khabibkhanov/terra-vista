import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terra Vista",
	description:
		"Terra Vista — Real estate developer focused on architecture and ecology.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children;
}
