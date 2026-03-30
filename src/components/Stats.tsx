"use client";

import { useTranslations } from "next-intl";

export default function Stats() {
	const t = useTranslations("stats");

	const STATS = [
		{ value: t("projects.value"), label: t("projects.label") },
		{ value: t("area.value"), label: t("area.label") },
		{ value: t("timeline.value"), label: t("timeline.label") },
		{ value: t("experience.value"), label: t("experience.label") },
	] as const;

	return (
		<section
			className="px-4 py-8 lg:px-12"
			style={{
				backgroundImage:
					"linear-gradient(90deg, rgba(0,35,25,0.05) 0%, rgba(0,35,25,0.05) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)",
			}}
		>
			{/* Mobile: each card has its own gradient bg; Desktop: plain white cards in a 4-col row */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 max-w-[1344px] mx-auto lg:rounded-none">
				{STATS.map(({ value, label }) => (
					<div
						key={value}
						className="rounded-[24px] px-[14px] lg:px-6 py-3 lg:py-4 flex flex-col gap-2 lg:gap-4 lg:h-[160px] justify-center"
						style={{
							background: "#fff",
						}}
					>
						<p className="font-[var(--font-figtree)] font-semibold text-[32px] lg:text-[56px] text-[#002319] tracking-[-1px] leading-none">
							{value}
						</p>
						<p className="font-[var(--font-figtree)] text-[16px] lg:text-[18px] text-[#07100b]/70 leading-tight">
							{label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
