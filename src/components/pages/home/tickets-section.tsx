export default function TicketsSection() {
    return (
        <section className="{ticketsSection}">
            <div className="flex items-center justify-center gap-40">
                <div className="w-64 h-36">
                    <p className="text-[var(--color-text)]">April 11, 2026</p>
                    <p className="text-[var(--color-text)]">Coachella Valley Music and Arts Festival <span>2026</span></p>
                    <p className="text-[var(--color-text)]">Indio, CA United States</p>
                    <div className="flex gap-8 text-[var(--color-text)]">
                        <a href="#">Tickets</a>
                        <a href="#">RSVP</a>
                    </div>
                </div>
                <div className="w-64 h-36">
                    <p className="text-[var(--color-text)]">April 18, 2026</p>
                    <p className="text-[var(--color-text)]">Coachella Valley Music and Arts Festival <span>2026</span></p>
                    <p className="text-[var(--color-text)]">Indio, CA United States</p>
                    <div className="flex gap-8 text-[var(--color-text)]">
                        <a href="#">Tickets</a>
                        <a href="#">RSVP</a>
                    </div>
                </div>
            </div>
        </section>
    )
}