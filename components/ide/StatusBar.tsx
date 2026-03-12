"use client";

import { usePathname } from "next/navigation";
import Playing from "../Playing";

export default function StatusBar() {
    const pathname = usePathname();
    const isWelcome = pathname === "/";
    const filePath = isWelcome ? "Welcome" : pathname.slice(1) + ".md";

    return (
        <div className="flex items-center justify-between h-[24px] px-3 bg-ide-sidebar border-t border-ide-border text-[11px] text-ide-muted">
            <span className="truncate">{filePath}</span>
            <div className="hidden sm:flex items-center">
                <Playing />
            </div>
        </div>
    );
}
