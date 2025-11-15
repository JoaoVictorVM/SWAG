import { prata } from "@/components/layout/fonts";

export default function HeroSection() {
    return (
        <section className="heroSection h-screen flex items-center justify-center">
            <h1 className="text-[8rem] sm:text-[12rem] lg:text-[15rem] text-[var(--color-gray)] font-[prata] font-bold transform scale-y-50 leading-none">SWAG</h1>
        </section>
    );
}
