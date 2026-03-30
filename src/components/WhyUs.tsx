"use client";

import { useTranslations } from "next-intl";
import { IMG_DOT_WHITE } from "@/lib/assets";

function ReasonCard({
	num,
	title,
	description,
}: {
	num: string;
	title: string;
	description: string;
}) {
	return (
		<div className="bg-white rounded-[24px] flex flex-col justify-between p-4 lg:p-5 h-[203px] lg:h-[283px] flex-1 min-w-0">
			<p className="font-[var(--font-figtree)] font-semibold text-[64px] text-[rgba(0,35,25,0.4)] text-right tracking-[-1.92px] leading-none">
				{num}
			</p>
			<div className="flex flex-col gap-3">
				<p className="font-[var(--font-figtree)] text-[22px] lg:text-[28px] text-[#07100b] tracking-[-0.66px] lg:tracking-[-0.84px] leading-normal">
					{title}
				</p>
				<p className="font-[var(--font-figtree)] text-[14px] lg:text-[16px] text-[#07100b]/70 tracking-[-0.42px] lg:tracking-[-0.48px] leading-normal">
					{description}
				</p>
			</div>
		</div>
	);
}

export default function WhyUs() {
	const t = useTranslations("whyUs");

	const REASONS = [
		{
			num: "01",
			title: t("reasons.0.title"),
			description: t("reasons.0.description"),
		},
		{
			num: "02",
			title: t("reasons.1.title"),
			description: t("reasons.1.description"),
		},
		{
			num: "03",
			title: t("reasons.2.title"),
			description: t("reasons.2.description"),
		},
		{
			num: "04",
			title: t("reasons.3.title"),
			description: t("reasons.3.description"),
		},
		{
			num: "05",
			title: t("reasons.4.title"),
			description: t("reasons.4.description"),
		},
	] as const;

	return (
		<section className="px-4 lg:px-12 py-8 lg:py-8">
			<div className="max-w-[1344px] mx-auto">
				<div className="bg-[#FF5F3A] rounded-[24px] p-4 lg:p-8 flex flex-col gap-4 lg:gap-4 lg:min-h-[657px] justify-center">
					{/* Mobile: badge + title + stacked cards */}
					{/* Desktop: row 1 (title col + 2 cards), row 2 (3 cards) */}

					{/* Row 1 */}
					<div className="flex flex-col lg:flex-row gap-4">
						{/* Title col */}
						<div className="flex flex-col gap-3 lg:flex-1 lg:min-w-0">
							<div className="inline-flex items-center gap-2 border border-[#c9c9c9] rounded-[48px] px-3 py-1.5 self-start">
								<img
									src={IMG_DOT_WHITE}
									alt=""
									className="w-[7px] h-[7px]"
								/>
								<span className="font-[var(--font-figtree)] text-[16px] text-white uppercase leading-6">
									{t("badge")}
								</span>
							</div>
							<h2 className="font-[var(--font-figtree)] text-[36px] lg:text-[48px] text-white tracking-[-1.44px] leading-normal">
								{t("heading")}
							</h2>
						</div>

						{/* Desktop: first 2 cards in row 1 */}
						<div className="hidden lg:flex gap-4 lg:flex-[2] lg:min-w-0">
							<ReasonCard {...REASONS[0]} />
							<ReasonCard {...REASONS[1]} />
						</div>
					</div>

					{/* Mobile: all 5 cards stacked */}
					<div className="flex flex-col gap-4 lg:hidden">
						{REASONS.map((r) => (
							<ReasonCard
								key={r.num}
								{...r}
							/>
						))}
					</div>

					{/* Desktop: row 2 — last 3 cards */}
					<div className="hidden lg:flex gap-4">
						{REASONS.slice(2).map((r) => (
							<ReasonCard
								key={r.num}
								{...r}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
