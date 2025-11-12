export default function TicketsSection() {
    return (
        <section className="{ticketsSection} mt-18 h-[50vh]">
            <div className="flex flex-col items-center justify-center gap-20">


                <div className="flex items-center justify-between gap-35">
                    <div className="w-56 h-36">
                        <p className="text-[var(--color-text)] font-[helvetica] font-extralight">APRIL 11, 2026</p>
                        <p className="text-[var(--color-text)] text-[1.2rem] font-[prata] font-black">COACHELLA VALLEY MUSIC AND ARTS FESTIVAL <span className="font-[helvetica] font-normal ml-1 text-[1rem]">2026</span></p>
                        <p className="text-[var(--color-text)] font-[helvetica]">INDIO, CA UNITED STATES</p>
                        <div className="flex gap-8 text-[var(--color-text)] font-[helvetica] mt-4 font-bold">
                            <a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[var(--color-text)] after:transition-all after:duration-300 hover:after:w-0">TICKETS</a>
                            <a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[var(--color-text)] after:transition-all after:duration-300 hover:after:w-0">RSVP</a>
                        </div>
                    </div>
                    <div className="w-56 h-36">
                        <p className="text-[var(--color-text)] font-[helvetica] font-extralight">APRIL 11, 2026</p>
                        <p className="text-[var(--color-text)] text-[1.2rem] font-[prata] font-black">COACHELLA VALLEY MUSIC AND ARTS FESTIVAL <span className="font-[helvetica] font-normal ml-1 text-[1rem]">2026</span></p>
                        <p className="text-[var(--color-text)] font-[helvetica]">INDIO, CA UNITED STATES</p>
                        <div className="flex gap-8 text-[var(--color-text)] font-[helvetica] mt-4 font-bold">
                            <a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[var(--color-text)] after:transition-all after:duration-300 hover:after:w-0">TICKETS</a>
                            <a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[var(--color-text)] after:transition-all after:duration-300 hover:after:w-0">RSVP</a>
                        </div>
                    </div>
                </div>


                <a href="https://www.bandsintown.com/artist-subscribe/307871?utm_campaign=track&utm_medium=web&app_id=umg_defjam_justinbieber&affil_code=umg_us&utm_source=public_api&came_from=267&spn=0&signature=ZZ1e79ec7b8f1e244c11f720095b0da49ac2adfce13e7e9ec15aca5ca65e4f2920" target="_blank" className="text-white font-[prata] text-[1.2rem] transform scale-y-80 font-bold bg-zinc-900 p-3 rounded-[5px] hover:bg-white/30">
                    FOLLOW ON BANDSINTOWN
                </a>
            </div>
        </section>
    )
}