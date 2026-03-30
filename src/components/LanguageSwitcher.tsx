"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect, useTransition } from "react";

export default function LanguageSwitcher() {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [isPending, startTransition] = useTransition();
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLanguageChange = (newLocale: Locale) => {
		setIsOpen(false);
		startTransition(() => {
			router.push(pathname, { locale: newLocale });
		});
	};

	const getFlagEmoji = (loc: Locale) => {
		const flags: Record<Locale, string> = {
			en: "🇺🇸",
			uz: "🇺🇿",
			ru: "🇷🇺",
		};
		return flags[loc];
	};

	return (
		<div
			className="relative"
			ref={dropdownRef}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#e5e7ea] bg-white hover:bg-gray-50 transition-colors text-sm font-[var(--font-figtree)] text-[#07100b]"
				aria-label="Change language"
				aria-expanded={isOpen}
			>
				<span className="text-base">{getFlagEmoji(locale)}</span>
				<span className="hidden sm:inline">{localeLabels[locale]}</span>
				<svg
					className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="absolute top-full mt-2 right-0 bg-white border border-[#e5e7ea] rounded-[8px] shadow-lg z-[100] min-w-[160px]">
					{locales.map((loc) => (
						<button
							key={loc}
							onClick={() => handleLanguageChange(loc)}
							className={`w-full text-left px-4 py-2.5 font-[var(--font-figtree)] text-sm transition-colors first:rounded-t-[8px] last:rounded-b-[8px] ${
								locale === loc
									? "bg-[#FF5F3A] text-white font-semibold"
									: "text-[#07100b] hover:bg-gray-100"
							}`}
						>
							<span className="mr-2">{getFlagEmoji(loc)}</span>
							{localeLabels[loc]}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
