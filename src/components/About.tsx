"use client";

import { useTranslations } from "next-intl";
import { IMG_DOT } from "@/lib/assets";
import SectionBadge from "./SectionBadge";

export default function About() {
	const t = useTranslations("about");

	return (
		<section
			id="about"
			className="bg-white px-4 lg:px-12 py-8 lg:py-16"
		>
			<div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:justify-between">
				{/* Badge */}
				<div className="shrink-0">
					<SectionBadge text={t("badge")} />
				</div>

				{/* Text — mobile uses Inter + #7a8b9b, desktop uses Figtree + #ababab */}
				<div className="lg:w-[952px]">
					<div className="font-[var(--font-inter)] lg:font-[var(--font-figtree)] font-normal text-[16px] lg:text-[24px] text-[#7a8b9b] lg:text-[#ababab] leading-[1.5] lg:leading-normal">
						<p className="mb-4">{t("content.0")}</p>
						<p>{t("content.1")}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
