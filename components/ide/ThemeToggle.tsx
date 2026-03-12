"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className="flex items-center justify-center w-[36px] h-[36px] text-ide-muted hover:text-ide-text hover:bg-ide-hover border-b border-ide-border transition-colors"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M8 3.5C5.51 3.5 3.5 5.51 3.5 8s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S10.49 3.5 8 3.5zM8 1.5v-1M8 15.5v-1M14.5 8h1M0.5 8h1M12.36 3.64l.7-.7M2.93 13.07l.7-.7M12.36 12.36l.7.7M2.93 2.93l.7.7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                    />
                </svg>
            ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M13.5 9.5a5.5 5.5 0 0 1-7-7 5.5 5.5 0 1 0 7 7z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
