"use client";

import { useTranslations } from "next-intl";
import { IMG_HERO_BG, IMG_HERO_MOBILE } from "@/lib/assets";

export default function Hero() {
	const t = useTranslations("hero");

	const FLOATING_CARDS = [
		{
			text: t("floatingCards.0"),
			rotate: "-rotate-[9.85deg]",
			top: "top-[58px]",
			left: "left-[35px]",
		},
		{
			text: t("floatingCards.1"),
			rotate: "rotate-[9.85deg]",
			top: "top-[255px]",
			left: "left-[206px]",
		},
		{
			text: t("floatingCards.2"),
			rotate: "-rotate-[9.85deg]",
			top: "top-[466px]",
			left: "left-[35px]",
		},
	];
	return (
		<section id="home">
			{/* ── Mobile ──
				Header is fixed & transparent: 36px tall.
				Image starts at top-0 (visible behind the transparent header).
				White card overlaps the image from ~126px from the top.
			*/}
			<div className="lg:hidden relative mt-[37px]">
				<div className="relative h-[311px] overflow-hidden">
					<img
						src={IMG_HERO_MOBILE}
						alt="Terra Vista"
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>
				</div>

				{/* White card overlapping the image (~45% from top) */}
				<div className="relative -mt-[185px] z-10 mx-[12px] bg-white rounded-tl-[12px] rounded-tr-[12px] px-4 py-3 flex flex-col gap-8">
					<div className="flex flex-col gap-3">
						<h1 className="font-[var(--font-figtree)] font-medium text-[28px] leading-tight text-[#002319]">
							{t("heading")
								.split("||highlight||")
								.map((part, i) => {
									const cleanPart = part.replace(
										"||/highlight||",
										"",
									);
									return i === 1 ? (
										<span
											key={i}
											className="text-[#FF5F3A]"
										>
											{cleanPart}
										</span>
									) : (
										<span key={i}>{cleanPart}</span>
									);
								})}
						</h1>
						<p className="font-[var(--font-figtree)] text-[14px] text-black/75 leading-normal">
							{t("description")}
						</p>
					</div>
					<a
						href="#location"
						className="self-start bg-[#FF5F3A] text-white font-[var(--font-figtree)] font-medium text-[12px] tracking-[-0.32px] px-6 py-2 rounded-[34px] hover:bg-[#e54e2a] transition-colors cursor-pointer"
					>
						{t("cta")}
					</a>
				</div>
			</div>

			{/* ── Desktop ──
				Header is fixed: top-4 (16px) + 60px height → bottom ≈ 76px.
				Hero container starts at mt-[93px] (matches Figma y=93).
				Background image has top:-18.29% to fill upward within the container.
			*/}
			<div className="hidden lg:block mt-[93px]">
				<div className="relative h-[659px] overflow-hidden">
					{/* Background layer */}
					<div className="absolute inset-0 bg-white">
						<img
							src={IMG_HERO_BG}
							alt=""
							aria-hidden="true"
							className="absolute left-0 w-full max-w-none"
							style={{ height: "136.57%", top: "-18.29%" }}
						/>
					</div>

					{/* Floating tilted cards */}
					{FLOATING_CARDS.map(({ text, rotate, top, left }) => (
						<div
							key={text}
							className={`absolute ${top} ${left} z-20`}
						>
							<div
								className={`${rotate} bg-white px-8 py-4 rounded-xl shadow-lg`}
							>
								<p className="font-[var(--font-montserrat)] font-semibold text-[#07100b] text-base whitespace-nowrap">
									{text}
								</p>
							</div>
						</div>
					))}

					{/* Right glass card */}
					<div className="absolute right-[35px] top-[39px] w-[739px] h-[582px] rounded-[24px] overflow-hidden z-10">
						<div className="absolute inset-0 backdrop-blur-[17.5px] bg-white/85 border-[3px] border-white/50 rounded-[15px]" />
						<div className="relative z-10 p-9 flex flex-col h-full">
							<div className="flex flex-col gap-7 flex-1">
								<h1 className="font-[var(--font-poppins)] text-[52px] leading-none tracking-[-2.08px] text-[#07100b]">
									{t("heading")
										.split("||highlight||")
										.map((part, i) => {
											const cleanPart = part.replace(
												"||/highlight||",
												"",
											);
											return i === 1 ? (
												<span
													key={i}
													className="text-[#FF5F3A]"
												>
													{cleanPart}
												</span>
											) : (
												<span key={i}>{cleanPart}</span>
											);
										})}
								</h1>
								<p className="font-[var(--font-poppins)] text-base text-[#07100b] w-[454px] leading-normal">
									{t("description")}
								</p>
							</div>
							<div className="flex flex-col gap-5 w-[382px]">
								<a
									href="#location"
									className="w-full bg-[#FF5F3A] text-white font-[var(--font-montserrat)] font-semibold text-base px-8 py-4 rounded-[38px] hover:bg-[#e54e2a] transition-colors cursor-pointer text-center"
								>
									{t("desktopCta")}
								</a>
								<p className="font-[var(--font-poppins)] text-[#07100b] text-base leading-normal">
									{t("tagline")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
