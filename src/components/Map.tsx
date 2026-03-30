"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled — Leaflet requires the browser's window object
const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-full rounded-[8px] lg:rounded-[32px] bg-[#07100b] flex items-center justify-center">
			<p className="text-white/50 text-sm">Xarita yuklanmoqda…</p>
		</div>
	),
});

export default MapLeaflet;
