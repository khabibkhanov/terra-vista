import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<About />
			<Stats />
			<Services />
			<Approach />
			<Gallery />
			<WhyUs />
			<Location />
			<Footer />
		</main>
	);
}
