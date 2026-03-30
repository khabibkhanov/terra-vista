import { IMG_ICON_LOCATION, IMG_ICON_PHONE } from "@/lib/assets";
import Map from "./Map";

const CONTACTS = [
	{
		icon: IMG_ICON_LOCATION,
		title: "Toshkent",
		address: "Toshkent shahri, O'zbekiston",
	},
	{
		icon: IMG_ICON_PHONE,
		title: "Номер телефона",
		address: "+998 99 123 45 67",
	},
] as const;

export default function Location() {
	return (
		<section className="px-4 lg:px-12 py-8">
			<div className="max-w-[1312px] mx-auto flex flex-col gap-8">
				{/* Heading + contacts */}
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-24 py-8">
					{/* Heading */}
					<div className="flex flex-col gap-5 lg:w-[560px] shrink-0">
						<h2 className="font-[var(--font-figtree)] text-[36px] lg:text-[60px] text-[#07100b] tracking-[-1.08px] lg:tracking-[-1.8px] uppercase leading-tight lg:leading-[60px] lg:w-[553px]">
							наше расположение
						</h2>
						<p className="font-[var(--font-montserrat)] text-[14px] lg:text-[16px] text-[#07100b] leading-[1.585]">
							Наш офис расположен в Ташкенте. Мы открыты для
							сотрудничества с частными и корпоративными
							клиентами.
						</p>
					</div>

					{/* Contact items */}
					<div className="flex flex-col gap-8 flex-1">
						{CONTACTS.map(({ icon, title, address }) => (
							<div
								key={title}
								className="flex gap-4 items-start"
							>
								<div className="w-12 h-12 bg-[#FF5F3A] rounded-[10px] flex items-center justify-center shrink-0">
									<img
										src={icon}
										alt=""
										className="w-6 h-6 brightness-0 invert"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<p className="font-[var(--font-figtree)] text-[18px] lg:text-[20px] text-[#07100b] leading-[30px]">
										{title}
									</p>
									<p className="font-[var(--font-figtree)] text-[14px] lg:text-[16px] text-[#07100b] leading-6">
										{address}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Real interactive Leaflet map — z-0 keeps it below the fixed header (z-50) */}
				<div className="relative z-0 h-[280px] lg:h-[516px] overflow-hidden rounded-[8px] lg:rounded-[32px]">
					<Map />
				</div>
			</div>
		</section>
	);
}
