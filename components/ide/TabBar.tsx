"use client";

import { usePathname } from "next/navigation";
import FileIcon from "../icons/FileIcon";

export default function TabBar() {
    const pathname = usePathname();

    const isWelcome = pathname === "/";
    const segments = pathname.slice(1).split("/");
    const fileName = isWelcome
        ? "Welcome"
        : `${segments[segments.length - 1]}.md`;

    return (
        <div className="flex items-center h-[36px] bg-ide-sidebar border-b border-ide-border text-[13px]">
            <div className="flex items-center h-full px-3 bg-ide-bg border-r border-ide-border">
                {!isWelcome && (
                    <span className="mr-1.5">
                        <FileIcon />
                    </span>
                )}
                <span className="truncate max-w-[200px] text-ide-text">
                    {fileName}
                </span>
                <button className="ml-2 text-ide-muted hover:text-ide-text text-xs leading-none">
                    &times;
                </button>
            </div>
        </div>
    );
}
