module.exports = {
    content: ["./app/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                mono: [
                    "var(--font-jetbrains-mono)",
                    "SF Mono",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "monospace",
                ],
            },
            colors: {
                "ide-bg": "#ffffff",
                "ide-sidebar": "#f5f5f5",
                "ide-border": "#e0e0e0",
                "ide-hover": "#eeeeee",
                "ide-text": "#333333",
                "ide-muted": "#999999",
                "ide-accent": "#0066cc",
                "ide-string": "#228822",
                "ide-selected": "#e8f0fe",
            },
        },
    },
    plugins: [],
};
