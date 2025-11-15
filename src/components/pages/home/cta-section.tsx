export default function CtaSection() {
    return (
        <section className="h-[60vh] lg:h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <div className="flex flex-col items-center gap-2">

                <p className="text-[var(--color-gray)] font-[helvetica] font-bold tracking-widest text-3xl sm:text-4xl lg:text-5xl">FOUR GRAMMY NOMINATIONS</p>

                <p className="text-[var(--color-gray)] font-[helvetica] uppercase text-base sm:text-xl lg:text-2xl">Pick your platform and hit play</p>

                <div className="flex flex-col items-center gap-2">
                    <a href="https://justinbieber.lnk.to/SWAG" target="_blank" className=" text-white font-[prata] font-bold text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] transform scale-y-80 mt-10 bg-zinc-900 p-3 rounded-[5px]  hover:bg-white/30 transition-transform duration-300 hover:scale-105">LISTEN NOW!</a>
                </div>

            </div>
        </section>
    )
}
