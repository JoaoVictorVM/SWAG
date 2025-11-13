import Header from "@/components/layout/header";
import HeroSection from "@/components/pages/home/hero-section";
import TicketsSection from "@/components/pages/home/tickets-section";
import PlayerSection from "@/components/pages/home/player-section";
import CtaSection from "@/components/pages/home/cta-section";
import Footer from "@/components/layout/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Justin Bieber",
    description: "Justin Bieber",
};

export default function Home() {
    return (
        <main>

            <Header />
            <HeroSection />
            <TicketsSection />
            <PlayerSection />
            <CtaSection />
            <Footer />

        </main>
    )
}