export default function CtaSection() {
    return (
        <section className="h-[40vh] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <p className="text-[var(--color-gray)] font-[helvetica] text-5xl font-bold tracking-widest">FOUR GRAMMY NOMINATIONS</p>
                <p className="text-[var(--color-gray)] font-[helvetica] text-2xl uppercase">Pick your platform and hit play</p>

                <div className="flex flex-col items-center gap-2">
                    <a href="https://justinbieber.lnk.to/SWAG" target="_blank" className="text-white font-[prata] text-[1.2rem] transform scale-y-80 font-bold mt-10 bg-zinc-900 p-3 rounded-[5px] hover:bg-white/30 transition-transform duration-300 hover:scale-105">
                        LISTEN NOW!
                    </a>
                </div>
            </div>
        </section>
    )
}