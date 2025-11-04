import { Prata } from "next/font/google";
import Helvetica from "next/font/local";

export const helvetica = Helvetica({
    src: "../../assets/fonts/Helvetica.ttf",
    variable: "--font-helvetica",
});

export const prata = Prata({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-prata",
});