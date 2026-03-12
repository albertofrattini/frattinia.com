import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import IDELayout from "../components/ide/IDELayout";
import "../styles/global.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "albertofratini.com",
    description: "Alberto Frattini - Lead Engineer @ STRV",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={jetbrainsMono.variable}>
            <body className="h-screen overflow-hidden font-mono text-[13px] leading-[1.6] text-ide-text bg-ide-bg">
                <IDELayout>{children}</IDELayout>
            </body>
        </html>
    );
}
