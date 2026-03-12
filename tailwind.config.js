module.exports = {
    content: ["./app/**/*.tsx", "./components/**/*.tsx"],
    darkMode: "class",
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
                "ide-bg": "var(--ide-bg)",
                "ide-sidebar": "var(--ide-sidebar)",
                "ide-border": "var(--ide-border)",
                "ide-hover": "var(--ide-hover)",
                "ide-text": "var(--ide-text)",
                "ide-muted": "var(--ide-muted)",
                "ide-accent": "var(--ide-accent)",
                "ide-string": "var(--ide-string)",
                "ide-selected": "var(--ide-selected)",
            },
        },
    },
    plugins: [],
};
