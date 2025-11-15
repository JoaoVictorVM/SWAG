import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full px-10 sm:px-16 lg:px-24 pt-6 z-10 sm:fixed sm:top-0 sm:left-0">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
                
                <p className="text-[var(--color-text)] font-[helvetica] font-extrabold tracking-[0.7rem] sm:tracking-[1rem] lg:tracking-[1.5rem]">JUSTIN BIEBER</p>

                <div className="flex text-[var(--color-text)] font-extrabold gap-3 sm:gap-4 items-center">
                    <a href="https://www.instagram.com/lilbieber/" target="_blank"><Instagram size={18} /></a>
                    <a href="https://www.facebook.com/JustinBieber" target="_blank"><Facebook size={18} /></a>
                    <a href="https://x.com/justinbieber" target="_blank"><Twitter size={18} /></a>

                    <a href="https://www.umusicstore.com/justin-bieber" target="_blank">
                        <p className="font-[prata] font-bold transform scale-y-70 text-lg sm:text-xl lg:text-2xl">SHOP</p>
                    </a>
                </div>
            </div>
        </header>
    );
}
