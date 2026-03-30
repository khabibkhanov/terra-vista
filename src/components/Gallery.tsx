"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
	IMG_GALLERY_1,
	IMG_GALLERY_2,
	IMG_GALLERY_3,
	IMG_GALLERY_MOBILE_1,
	IMG_GALLERY_MOBILE_2,
	IMG_GALLERY_MOBILE_3,
} from "@/lib/assets";

const DESKTOP_IMAGES = [IMG_GALLERY_1, IMG_GALLERY_2, IMG_GALLERY_3];
const MOBILE_IMAGES = [
	IMG_GALLERY_MOBILE_1,
	IMG_GALLERY_MOBILE_2,
	IMG_GALLERY_MOBILE_3,
];

export default function Gallery() {
	const t = useTranslations("gallery");
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const getFlexValue = (index: number) => {
		if (hoveredIndex === null) return index === 2 ? 3 : 1;
		return hoveredIndex === index ? 3 : 1;
	};

	return (
		<section
			id="projects"
			className="bg-white px-4 lg:px-12 py-10 lg:py-12"
		>
			<div className="max-w-[1344px] mx-auto flex flex-col gap-8 lg:gap-12">
				{/* Header */}
				<div className="flex flex-col items-center gap-4 lg:gap-6 text-center">
					<h2 className="font-[var(--font-figtree)] text-[36px] lg:text-[48px] text-[#07100b] tracking-[-1.08px] lg:tracking-[-1.44px] leading-tight">
						{t("heading")}
					</h2>
					<p className="font-[var(--font-figtree)] text-[16px] lg:text-[20px] text-[#07100b]/70 tracking-[-0.48px] lg:tracking-[-0.6px] leading-[1.5] max-w-[762px]">
						{t("description")}
					</p>
				</div>

				{/* Desktop gallery: accordion hover effect */}
				<div
					className="hidden lg:flex gap-2 h-[550px]"
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{DESKTOP_IMAGES.map((src, i) => (
						<div
							key={i}
							className="rounded-[20px] overflow-hidden cursor-pointer"
							style={{
								flex: getFlexValue(i),
								transition: "flex 0.5s ease-in-out",
							}}
							onMouseEnter={() => setHoveredIndex(i)}
						>
							<img
								src={src}
								alt={`Project ${i + 1}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>

				{/* Mobile gallery: horizontal scroll with snap */}
				<div className="lg:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 scrollbar-hide">
					{MOBILE_IMAGES.map((src, i) => (
						<div
							key={i}
							className="snap-center shrink-0 w-[82vw] h-[280px] rounded-[16px] overflow-hidden"
						>
							<img
								src={src}
								alt={`Project ${i + 1}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
