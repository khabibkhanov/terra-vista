import SectionBadge from "./SectionBadge";
import { IMG_APPROACH_2, IMG_DIVIDER } from "@/lib/assets";

const STEPS = [
	{
		num: "1.",
		title: "Стратегия и концепция",
		description:
			"Мы начинаем с анализа локации, аудитории и потенциала проекта, формируя основу будущего результата.",
	},
	{
		num: "2.",
		title: "Проектирование и детализация",
		description:
			"Разрабатываем архитектуру и инженерные решения с учётом практичности, эстетики и долговечности.",
	},
	{
		num: "3.",
		title: "Реализация и контроль",
		description:
			"Обеспечиваем полный контроль строительства, чтобы итог соответствовал изначальной идее без компромиссов.",
	},
] as const;

export default function Approach() {
	return (
		<section className="bg-white px-4 lg:px-12 py-10 lg:py-12">
			<div className="max-w-[1344px] mx-auto flex flex-col gap-12">
				{/* Header */}
				<div className="flex flex-col items-center gap-6">
					<SectionBadge text="Проекты" />
					<div className="flex flex-col items-center gap-4 text-center">
						<h2 className="font-[var(--font-figtree)] text-[36px] lg:text-[48px] text-[#07100b] tracking-[-1.08px] lg:tracking-[-1.44px] leading-tight">
							Наш подход
						</h2>
						<p className="font-[var(--font-figtree)] text-[16px] lg:text-[20px] text-[#07100b]/70 tracking-[-0.48px] lg:tracking-[-0.6px] leading-[1.5] max-w-[836px]">
							Каждый проект — это система решений, где важна не
							только идея, но и точная реализация на всех этапах.
						</p>
					</div>
				</div>

				{/* Steps + Image */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
					{/* Steps */}
					<div className="flex flex-col gap-4 w-full lg:w-[783px]">
						{STEPS.map(({ num, title, description }, i) => (
							<div key={num}>
								<div className="flex gap-3 items-start">
									<div className="w-8 h-8 lg:w-12 lg:h-12 rounded-[29px] bg-[rgba(242,72,34,0.05)] flex items-center justify-center shrink-0">
										<span className="font-[var(--font-figtree)] font-medium text-[16px] lg:text-[20px] text-[#07100b]">
											{num}
										</span>
									</div>
									<div className="flex flex-col gap-3 flex-1">
										<h3 className="font-[var(--font-figtree)] font-medium text-[16px] lg:text-[28px] text-[#07100b] leading-normal">
											{title}
										</h3>
										<p className="font-[var(--font-figtree)] text-[14px] lg:text-[18px] text-[#8f8f8f] leading-normal">
											{description}
										</p>
									</div>
								</div>
								{i < STEPS.length - 1 && (
									<div className="mt-4 w-full">
										<img
											src={IMG_DIVIDER}
											alt=""
											className="w-full h-px"
										/>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Image */}
					<div className="hidden lg:block h-[314px] w-[522px] rounded-[32px] overflow-hidden shrink-0">
						<img
							src={IMG_APPROACH_2}
							alt="Approach"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
