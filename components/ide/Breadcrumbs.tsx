"use client";

import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "../../data/filesystem";

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname === "/") return null;

    const segments = pathname.slice(1).split("/");
    // Add .md extension to last segment
    const displaySegments = [...segments];
    displaySegments[displaySegments.length - 1] += ".md";
    const crumbs = getBreadcrumbs(displaySegments);

    return (
        <div className="flex items-center h-[28px] px-3 border-b border-ide-border text-[12px] text-ide-muted bg-ide-bg">
            {crumbs.map((crumb, i) => (
                <span key={i} className="flex items-center">
                    {i > 0 && <span className="mx-1.5">/</span>}
                    <span
                        className={
                            i === crumbs.length - 1
                                ? "text-ide-text"
                                : ""
                        }
                    >
                        {crumb}
                    </span>
                </span>
            ))}
        </div>
    );
}
