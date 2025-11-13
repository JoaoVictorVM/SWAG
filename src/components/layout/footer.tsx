export default function Footer() {
    return(
        <footer className="h-[10vh] flex items-center justify-center gap-20 uppercase font-[prata] text-[var(--color-text)] text-[1rem] font-black transform scale-y-70">
            <a href="https://defjamshop.com/" target="_blank" className="hover:underline underline-offset-4">Copyright Def Jam</a>
            <a href="https://privacy.umusic.com/" target="_blank" className="hover:underline underline-offset-4">Privacy Policy</a>
            <a href="https://privacy.umusic.com/terms/" target="_blank" className="hover:underline underline-offset-4">Terms & Conditions</a>
            <a href="https://www.universalmusic.com/CCPA/" target="_blank" className="hover:underline underline-offset-4">Do Not Sell My Personal Information</a>
        </footer>
    )
}