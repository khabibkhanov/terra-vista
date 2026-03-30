"use client";

import { useTranslations } from "next-intl";
import {
	IMG_LOGO,
	IMG_FOOTER_CALL,
	IMG_FOOTER_SMS,
	IMG_INSTAGRAM,
	IMG_LINKEDIN,
	IMG_TELEGRAM,
} from "@/lib/assets";

const SOCIAL_ICONS = [
	{ src: IMG_INSTAGRAM, alt: "Instagram", size: "w-4 h-4" },
	{ src: IMG_LINKEDIN, alt: "LinkedIn", size: "w-[18px] h-[18px]" },
	{ src: IMG_TELEGRAM, alt: "Telegram", size: "w-5 h-5" },
] as const;

export default function Footer() {
	const t = useTranslations("footer");

	return (
		<footer
			id="contact"
			className="bg-[#FF5F3A] px-4 lg:px-16 py-8"
		>
			<div className="max-w-[1440px] mx-auto flex flex-col gap-[55px]">
				{/* 3-column row */}
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between lg:items-start">
					{/* Logo + description */}
					<div className="flex flex-col gap-[18px] flex-1">
						<div className="w-[175px] h-16">
							<img
								src={IMG_LOGO}
								alt="Terra Vista"
								className="w-full h-full object-contain"
								style={{ transform: "none" }}
							/>
						</div>
						<p className="font-[var(--font-montserrat)] text-[14px] lg:text-[16px] text-[#fffbfb] leading-[1.585] w-[313px]">
							{t("description")}
						</p>
					</div>

					{/* Contact Us */}
					<div className="flex flex-col gap-[18px] flex-1">
						<p className="font-[var(--font-montserrat)] font-semibold text-[20px] lg:text-[24px] text-white tracking-[0.48px]">
							{t("contactUs")}
						</p>
						<div className="flex flex-col gap-4">
							<p className="font-[var(--font-montserrat)] text-[14px] lg:text-[16px] text-white/80 w-[231px] leading-normal">
								{t("address")}
							</p>
							<div className="flex items-center gap-2">
								<img
									src={IMG_FOOTER_CALL}
									alt=""
									className="w-[15px] h-[14px]"
								/>
								<a
									href="tel:+99891234567"
									className="font-[var(--font-montserrat)] text-[14px] lg:text-[16px] text-white/80"
								>
									{t("phone")}
								</a>
							</div>
							<div className="flex items-center gap-2">
								<img
									src={IMG_FOOTER_SMS}
									alt=""
									className="w-[20px] h-[19px]"
								/>
								<a 
									href="mailto:info@terrovista.com"
									className="font-[var(--font-montserrat)] text-[14px] lg:text-[16px] text-white/80"
								>
									{t("email")}
								</a>
							</div>
						</div>
					</div>

					{/* Follow Us */}
					<div className="flex flex-col gap-[18px] w-[249px]">
						<p className="font-[var(--font-montserrat)] font-semibold text-[20px] lg:text-[24px] text-white tracking-[0.48px]">
							{t("followUs")}
						</p>
						<div className="flex gap-4">
							{SOCIAL_ICONS.map(({ src, alt, size }) => (
								<a
									href={alt === "Instagram" ? "https://www.instagram.com" : alt === "LinkedIn" ? "https://www.linkedin.com" : "https://t.me"}
									target="_blank"
									rel="noopener noreferrer"
									key={alt}
									className="relative w-8 h-8 rounded-[8px] bg-[#FF5F3A] flex items-center justify-center hover:brightness-110 transition-all cursor-pointer"
									aria-label={alt}
								>
									<img
										src={src}
										alt={alt}
										className={`${size} relative z-10 brightness-0 invert`}
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Divider + copyright */}
				<div className="flex flex-col gap-8 items-center">
					<div className="w-full h-px bg-[#fffbfb] opacity-20 border border-[rgba(255,251,251,0.35)]" />
					<p className="font-[var(--font-figtree)] text-[#fffbfb] text-[14px] opacity-65 text-center">
						{t("copyright")}
					</p>
				</div>
			</div>
		</footer>
	);
}
