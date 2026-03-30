const STATS = [
	{ value: "25+", label: "Реализованных проектов" },
	{ value: "500+", label: "тыс. м² построено" },
	{ value: "98%", label: "Завершённых проектов в срок" },
	{ value: "15+", label: "Лет на рынке" },
] as const;

export default function Stats() {
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
