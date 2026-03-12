"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import Breadcrumbs from "./Breadcrumbs";
import StatusBar from "./StatusBar";
import ThemeToggle from "./ThemeToggle";

export default function IDELayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-ide-bg">
            <div className="flex flex-1 overflow-hidden">
                {/* Desktop sidebar */}
                <div className="hidden md:block w-[240px] flex-shrink-0">
                    <Sidebar />
                </div>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/30 z-40 md:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <div className="fixed inset-y-0 left-0 w-[260px] z-50 md:hidden">
                            <Sidebar
                                onFileClick={() => setSidebarOpen(false)}
                            />
                        </div>
                    </>
                )}

                {/* Editor area */}
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                    {/* Mobile hamburger + Tab bar + Theme toggle */}
                    <div className="flex items-center">
                        <button
                            className="md:hidden flex items-center justify-center w-[36px] h-[36px] text-ide-muted hover:text-ide-text hover:bg-ide-hover border-b border-ide-border"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M2 4H14M2 8H14M2 12H14"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <div className="flex-1">
                            <TabBar />
                        </div>
                        <ThemeToggle />
                    </div>
                    <Breadcrumbs />
                    <div className="flex-1 overflow-auto">{children}</div>
                </div>
            </div>

            {/* Status bar */}
            <StatusBar />
        </div>
    );
}
