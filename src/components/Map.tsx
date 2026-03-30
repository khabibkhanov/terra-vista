"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled — Leaflet requires the browser's window object
const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
	ssr: false,
	loading: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const t = useTranslations("map");
		return (
			<div className="w-full h-full rounded-[8px] lg:rounded-[32px] bg-[#07100b] flex items-center justify-center">
				<p className="text-white/50 text-sm">{t("loading")}</p>
			</div>
		);
	},
});

export default MapLeaflet;
