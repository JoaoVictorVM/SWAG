import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Header() {
    return(
        <header className="fixed top-0 left-0 w-full pl-25 pr-25 pt-8">
            <div className="flex items-center justify-between">
                <p className="text-[var(--color-text)] font-[helvetica] tracking-[1.5rem] font-extrabold">JUSTIN BIEBER</p>

                <div className="flex text-[var(--color-text)] font-extrabold gap-2 items-center">
                    <a href="https://www.instagram.com/lilbieber/" target="_blank">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/JustinBieber" target="_blank">
                        <Facebook size={20} />
                    </a>
                    <a href="https://x.com/justinbieber" target="_blank">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.umusicstore.com/justin-bieber" target="_blank">
                        <p className="font-[prata] text-2xl font-bold transform scale-y-70">SHOP</p>
                    </a>
                </div>
            </div>
        </header>
    )
}