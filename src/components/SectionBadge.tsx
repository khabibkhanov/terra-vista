import { IMG_DOT } from "@/lib/assets";

interface SectionBadgeProps {
	text: string;
	dotColor?: "dark" | "white";
}

export default function SectionBadge({
	text,
	dotColor = "dark",
}: SectionBadgeProps) {
	return (
		<div className="inline-flex items-center gap-2 border border-[#c9c9c9] rounded-[48px] px-3 py-1.5">
			<img
				src={IMG_DOT}
				alt=""
				className="w-[7px] h-[7px]"
			/>
			<span
				className={`font-[var(--font-figtree)] text-[14px] lg:text-[16px] leading-5 lg:leading-6 uppercase tracking-wide ${
					dotColor === "white" ? "text-white" : "text-[#07100b]"
				}`}
			>
				{text}
			</span>
		</div>
	);
}
