"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function fixLeafletIcons() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	delete (L.Icon.Default.prototype as any)._getIconUrl;
	L.Icon.Default.mergeOptions({
		iconRetinaUrl:
			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
		iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
		shadowUrl:
			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
	});
}

const OFFICE: [number, number] = [41.2995, 69.2401];

export default function MapLeaflet() {
	const t = useTranslations("map.popup");

	useEffect(() => {
		fixLeafletIcons();
	}, []);

	return (
		<MapContainer
			center={OFFICE}
			zoom={14}
			scrollWheelZoom={false}
			style={{ width: "100%", height: "100%" }}
			className="rounded-[8px] lg:rounded-[32px]"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={OFFICE}>
				<Popup>
					<strong>{t("title")}</strong>
					<br />
					{t("address")}
				</Popup>
			</Marker>
		</MapContainer>
	);
}
