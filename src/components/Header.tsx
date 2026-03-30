"use client";

import { useState } from "react";
import { IMG_ICON_ARROW, IMG_ICON_MENU } from "@/lib/assets";

const NAV_LINKS = [
	{ label: "Home", href: "#home" },
	{ label: "About Us", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Services", href: "#services" },
] as const;

function scrollTo(href: string) {
	document
		.querySelector(href)
		?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	function handleNav(href: string) {
		setMenuOpen(false);
		setTimeout(() => scrollTo(href), 10);
	}

	return (
		<>
			{/* ── Mobile: solid white bar ── */}
			<header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-sm">
				<button
					onClick={() => handleNav("#home")}
					className="font-[var(--font-figtree)] font-semibold text-[#002319] text-[12px] leading-normal cursor-pointer"
				>
					Power Trust Building
				</button>
				<div className="flex items-center gap-3">
					<a
						href="tel:+9989912345667"
						className="font-[var(--font-figtree)] font-medium text-[#07100b] text-[12px] leading-normal"
					>
						+9989912345667
					</a>
					<button
						onClick={() => setMenuOpen((o) => !o)}
						className="w-[18px] h-[18px] flex items-center justify-center cursor-pointer"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
					>
						{menuOpen ? (
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
							>
								<path
									d="M2 2L16 16M16 2L2 16"
									stroke="#002319"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						) : (
							<img
								src={IMG_ICON_MENU}
								alt="Menu"
								className="w-full h-full object-contain"
							/>
						)}
					</button>
				</div>
			</header>

			{/* ── Mobile drawer ── */}
			{menuOpen && (
				<div className="lg:hidden fixed inset-0 z-40 flex flex-col">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/40"
						onClick={() => setMenuOpen(false)}
					/>
					{/* Slide-down panel */}
					<div className="relative bg-white mt-[34px] rounded-b-[20px] px-4 pt-4 pb-8 flex flex-col gap-1 shadow-xl">
						{NAV_LINKS.map(({ label, href }) => (
							<button
								key={label}
								onClick={() => handleNav(href)}
								className="text-left font-[var(--font-figtree)] font-medium text-[16px] text-[#07100b] py-3 px-2 border-b border-[#f0f0f0] last:border-0 hover:text-[#FF5F3A] transition-colors cursor-pointer"
							>
								{label}
							</button>
						))}
						<button
							onClick={() => handleNav("#contact")}
							className="mt-4 w-full bg-[#FF5F3A] text-white font-[var(--font-figtree)] font-semibold text-[14px] py-3 rounded-[34px] hover:bg-[#e54e2a] transition-colors cursor-pointer"
						>
							Contact Us
						</button>
					</div>
				</div>
			)}

			{/* ── Desktop: glassmorphism card ── */}
			<header className="hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-64px)] max-w-[1376px]">
				<div className="flex items-center justify-between pl-4 pr-2 py-2 bg-white/90 backdrop-blur-[17.5px] border border-[rgba(233,233,235,0.35)] rounded-[18px] shadow-sm">
					<button
						onClick={() => scrollTo("#home")}
						className="font-[var(--font-montserrat)] font-semibold text-[#f24822] text-2xl whitespace-nowrap cursor-pointer"
					>
						Terra Vista
					</button>

					<nav className="flex items-center gap-8">
						{NAV_LINKS.map(({ label, href }) => (
							<button
								key={label}
								onClick={() => scrollTo(href)}
								className="font-[var(--font-figtree)] font-semibold text-base text-[#07100b] leading-6 hover:text-[#FF5F3A] transition-colors cursor-pointer"
							>
								{label}
							</button>
						))}
					</nav>

					<button
						onClick={() => scrollTo("#contact")}
						className="flex items-center gap-2 bg-[#FF5F3A] border border-[#f05734] text-white font-[var(--font-figtree)] font-semibold text-base leading-6 px-4 py-[10px] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#e54e2a] transition-colors cursor-pointer"
					>
						<span>Contact Us</span>
						<img
							src={IMG_ICON_ARROW}
							alt=""
							className="w-5 h-5"
						/>
					</button>
				</div>
			</header>
		</>
	);
}
