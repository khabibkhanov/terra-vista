import { IMG_DOT } from "@/lib/assets";

export default function About() {
	return (
		<section
			id="about"
			className="bg-white px-4 lg:px-12 py-8 lg:py-16"
		>
			<div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:justify-between">
				{/* Badge */}
				<div className="shrink-0">
					<div className="inline-flex items-center gap-2 border border-[#e9e9e9] rounded-[48px] px-3 py-1.5">
						<img
							src={IMG_DOT}
							alt=""
							className="w-[7px] h-[7px]"
						/>
						<span className="font-[var(--font-figtree)] text-[14px] text-[#07100b] uppercase leading-5 tracking-wide">
							О холдинге
						</span>
					</div>
				</div>

				{/* Text — mobile uses Inter + #7a8b9b, desktop uses Figtree + #ababab */}
				<div className="lg:w-[952px]">
					<div
						className="
              font-[var(--font-inter)] lg:font-[var(--font-figtree)]
              font-normal
              text-[16px] lg:text-[24px]
              text-[#7a8b9b] lg:text-[#ababab]
              leading-[1.5] lg:leading-normal
            "
					>
						<p className="mb-4">
							Terra Vista — это команда архитекторов, инженеров и
							девелоперов, объединённых одной задачей: создавать
							жилые пространства, которые сохраняют ценность со
							временем.
						</p>
						<p>
							Мы не просто строим здания — мы формируем среду, где
							продумана каждая деталь: от планировки до
							инфраструктуры и благоустройства.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
