"use client";

import { useTranslations } from "next-intl";
import {
	IMG_GALLERY_1,
	IMG_GALLERY_2,
	IMG_GALLERY_3,
	IMG_GALLERY_MOBILE_1,
	IMG_GALLERY_MOBILE_2,
	IMG_GALLERY_MOBILE_3,
} from "@/lib/assets";

export default function Gallery() {
	const t = useTranslations("gallery");

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

				{/* Desktop gallery: 2 narrow + 1 wide */}
				<div className="hidden lg:flex gap-2 h-[550px]">
					<div className="w-[280px] rounded-[20px] overflow-hidden shrink-0">
						<img
							src={IMG_GALLERY_1}
							alt="Project 1"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-[280px] rounded-[20px] overflow-hidden shrink-0">
						<img
							src={IMG_GALLERY_2}
							alt="Project 2"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 rounded-[20px] overflow-hidden">
						<img
							src={IMG_GALLERY_3}
							alt="Project 3"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Mobile gallery: left wide + right 2-stacked */}
				<div className="lg:hidden flex gap-[4px] h-[300px]">
					<div className="w-[71%] rounded-[10px] overflow-hidden shrink-0">
						<img
							src={IMG_GALLERY_MOBILE_1}
							alt="Project 1"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-[4px]">
						<div className="flex-1 rounded-[10px] overflow-hidden">
							<img
								src={IMG_GALLERY_MOBILE_2}
								alt="Project 2"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 rounded-[10px] overflow-hidden">
							<img
								src={IMG_GALLERY_MOBILE_3}
								alt="Project 3"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
