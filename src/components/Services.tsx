import SectionBadge from "./SectionBadge";
import {
	IMG_SERVICE_1,
	IMG_SERVICE_2_A,
	IMG_SERVICE_2_B,
	IMG_SERVICE_3,
} from "@/lib/assets";

const SERVICES = [
	{
		icon: IMG_SERVICE_1,
		title: "Девелопмент жилых проектов",
		description:
			"Мы создаём концепцию, анализируем рынок и реализуем проекты, которые сохраняют ценность и привлекательность на годы вперёд.",
	},
	{
		icons: [IMG_SERVICE_2_A, IMG_SERVICE_2_B] as [string, string],
		title: "Архитектурное проектирование",
		description:
			"Проектируем здания с учётом эстетики, функциональности и окружающей среды, создавая баланс между формой и содержанием.",
	},
	{
		icon: IMG_SERVICE_3,
		title: "Управление строительством",
		description:
			"Контролируем каждый этап реализации, обеспечивая соответствие срокам, бюджету и качественным стандартам.",
	},
] as const;

export default function Services() {
	return (
		<section
			id="services"
			className="bg-white px-4 lg:px-12 py-8 lg:py-12"
		>
			<div className="max-w-[1344px] mx-auto flex flex-col gap-8 lg:gap-12">
				{/* Header */}
				<div className="flex flex-col items-start lg:items-center gap-4 lg:gap-6">
					<SectionBadge text="Что мы делаем" />
					<div className="flex flex-col items-start lg:items-center gap-3 lg:gap-4 lg:text-center">
						<h2 className="font-[var(--font-figtree)] text-[36px] lg:text-[48px] text-[#262b35] lg:text-[#07100b] tracking-[-1.44px] leading-tight">
							Наши сервисы
						</h2>
						{/* Mobile description (Quicksand, 14px, #07100b) */}
						<p className="lg:hidden font-[var(--font-quicksand)] text-[14px] text-[#07100b] leading-normal">
							Мы реализуем комплексные строительные решения для
							бизнеса — с фокусом на надёжность, контроль и
							предсказуемый результат.
						</p>
						{/* Desktop description */}
						<p className="hidden lg:block font-[var(--font-figtree)] text-[20px] text-[#7a7a7a] tracking-[-0.6px] leading-[1.5] max-w-[762px]">
							Мы берём на себя весь цикл — от идеи до готового
							пространства, чтобы результат был целостным и
							продуманным.
						</p>
					</div>
				</div>

				{/* Cards */}
				<div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
					{SERVICES.map((service, i) => (
						<div
							key={i}
							className="flex-1 min-w-[280px] flex flex-col gap-3 lg:gap-12 p-[14px] lg:p-6 rounded-[12px] lg:rounded-[16px] border-0 lg:border border-[#e5e7ea] lg:h-[348px]"
							style={{
								background:
									"linear-gradient(90deg, rgba(255,95,58,0.05) 0%, rgba(255,95,58,0.05) 100%), #fff7f5",
							}}
						>
							{/* Icon */}
							<div className="w-12 h-12 bg-white border border-black/[0.08] rounded-[10px] flex items-center justify-center relative shrink-0">
								{"icons" in service ? (
									<div className="w-6 h-6 relative overflow-hidden">
										<img
											src={service.icons[0]}
											alt=""
											className="absolute inset-0 w-full h-full"
										/>
										<img
											src={service.icons[1]}
											alt=""
											className="absolute inset-0 w-full h-full"
										/>
									</div>
								) : (
									<img
										src={service.icon}
										alt=""
										className="w-6 h-6"
									/>
								)}
							</div>

							{/* Content */}
							<div className="flex flex-col gap-3">
								{/* Card 1 mobile: 16px #262b35 | Cards 2–3 mobile: 18px #07100b | Desktop: 18px #07100b */}
								<h3
									className={`font-[var(--font-figtree)] font-medium leading-6 ${
										i === 0
											? "text-[16px] text-[#262b35] lg:text-[18px] lg:text-[#07100b]"
											: "text-[18px] text-[#07100b]"
									}`}
								>
									{service.title}
								</h3>
								{/* Mobile: Figtree 14px #7a8b9b | Desktop: Figtree 16px #8f8f8f */}
								<p className="font-[var(--font-figtree)] text-[14px] lg:text-[16px] text-[#7a8b9b] lg:text-[#8f8f8f] leading-6">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
