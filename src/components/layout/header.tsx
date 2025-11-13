export default function Header() {
    return(
        <header className="fixed top-0 left-0 w-full pl-25 pr-25 pt-8">
            <div className="flex items-center justify-between">
                <p className="text-[var(--color-text)] font-[helvetica] tracking-[1.5rem] font-extrabold">JUSTIN BIEBER</p>

                <div>
                    <a href="https://www.umusicstore.com/justin-bieber" target="_blank">
                        <p className="text-[var(--color-text)] font-[prata] text-2xl font-bold transform scale-y-70">SHOP</p>
                    </a>
                </div>
            </div>
        </header>
    )
}