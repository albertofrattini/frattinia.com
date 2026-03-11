import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex-sans",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Alberto Frattini - javascript developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${ibmPlexSans.variable} ${instrumentSerif.variable}`}>
            <body className="bg-gray-50 dark:bg-gray-900">
                <Header />
                <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
