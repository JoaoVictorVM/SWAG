import HeroSection from "@/components/pages/home/hero-section";
import TicketsSection from "@/components/pages/home/tickets-section";
import TracksSection from "@/components/pages/home/tracks-section";
import PlayerSection from "@/components/pages/home/player-section";

export default function Home() {
    return (
        <main>

            <HeroSection />
            <TicketsSection />
            <PlayerSection />

        </main>
    )
}