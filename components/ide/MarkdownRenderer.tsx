import { VirtualFileContent } from "../../data/filesystem";

function highlightLine(
    line: string,
    inFrontmatter: boolean
): React.ReactNode {
    // --- delimiters
    if (line === "---") {
        return <span className="text-ide-muted">{line}</span>;
    }

    // YAML key: value in frontmatter
    if (inFrontmatter) {
        const match = line.match(/^(\w[\w\s]*?)(:)(.*)$/);
        if (match) {
            return (
                <>
                    <span className="text-ide-accent">{match[1]}</span>
                    <span className="text-ide-muted">{match[2]}</span>
                    <span className="text-ide-string">{match[3]}</span>
                </>
            );
        }
        return <span className="text-ide-string">{line}</span>;
    }

    // ### Heading 3
    if (line.startsWith("### ")) {
        return (
            <>
                <span className="text-ide-muted">### </span>
                <span className="font-bold">{line.slice(4)}</span>
            </>
        );
    }

    // ## Heading 2
    if (line.startsWith("## ")) {
        return (
            <>
                <span className="text-ide-muted">## </span>
                <span className="font-bold">{line.slice(3)}</span>
            </>
        );
    }

    // # Heading 1
    if (line.startsWith("# ")) {
        return (
            <>
                <span className="text-ide-muted"># </span>
                <span className="font-bold text-[15px]">{line.slice(2)}</span>
            </>
        );
    }

    // ![alt](src) image
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
        return (
            <span>
                <span className="text-ide-muted">![</span>
                <span className="text-ide-accent">{imgMatch[1]}</span>
                <span className="text-ide-muted">](</span>
                <span className="text-ide-string">{imgMatch[2]}</span>
                <span className="text-ide-muted">)</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imgMatch[2]}
                    alt={imgMatch[1]}
                    className="mt-2 max-w-full rounded border border-ide-border"
                />
            </span>
        );
    }

    // - list item
    if (line.match(/^(\s*)- /)) {
        const match = line.match(/^(\s*)(- )(.*)$/);
        if (match) {
            return (
                <>
                    <span>{match[1]}</span>
                    <span className="text-ide-muted">{match[2]}</span>
                    <span>{highlightInline(match[3])}</span>
                </>
            );
        }
    }

    // _italic line_ (standalone, like dates)
    if (line.startsWith("_") && line.endsWith("_") && !line.startsWith("__")) {
        return (
            <>
                <span className="text-ide-muted">_</span>
                <span className="italic">{highlightInline(line.slice(1, -1))}</span>
                <span className="text-ide-muted">_</span>
            </>
        );
    }

    return <span>{highlightInline(line)}</span>;
}

function highlightInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
        // [text](url)
        const linkMatch = remaining.match(
            /^(.*?)\[([^\]]+)\]\(([^)]+)\)(.*)$/
        );
        if (linkMatch) {
            if (linkMatch[1]) {
                parts.push(
                    <span key={key++}>
                        {highlightInlineSimple(linkMatch[1])}
                    </span>
                );
            }
            parts.push(
                <a
                    key={key++}
                    href={linkMatch[3]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <span className="text-ide-muted">[</span>
                    <span className="text-ide-accent">{linkMatch[2]}</span>
                    <span className="text-ide-muted">](</span>
                    <span className="text-ide-string">{linkMatch[3]}</span>
                    <span className="text-ide-muted">)</span>
                </a>
            );
            remaining = linkMatch[4];
            continue;
        }

        // **bold**
        const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)$/);
        if (boldMatch) {
            if (boldMatch[1]) {
                parts.push(
                    <span key={key++}>
                        {highlightInlineSimple(boldMatch[1])}
                    </span>
                );
            }
            parts.push(
                <span key={key++}>
                    <span className="text-ide-muted">**</span>
                    <span className="font-bold">{boldMatch[2]}</span>
                    <span className="text-ide-muted">**</span>
                </span>
            );
            remaining = boldMatch[3];
            continue;
        }

        // _italic_
        const italicMatch = remaining.match(/^(.*?)_(.+?)_(.*)$/);
        if (italicMatch) {
            if (italicMatch[1]) {
                parts.push(
                    <span key={key++}>
                        {highlightInlineSimple(italicMatch[1])}
                    </span>
                );
            }
            parts.push(
                <span key={key++}>
                    <span className="text-ide-muted">_</span>
                    <span className="italic">{italicMatch[2]}</span>
                    <span className="text-ide-muted">_</span>
                </span>
            );
            remaining = italicMatch[3];
            continue;
        }

        parts.push(<span key={key++}>{remaining}</span>);
        break;
    }

    return <>{parts}</>;
}

function highlightInlineSimple(text: string): React.ReactNode {
    return text;
}

export default function MarkdownRenderer({
    content,
}: {
    content: VirtualFileContent;
}) {
    // Serialize frontmatter
    const frontmatterLines = [
        "---",
        ...Object.entries(content.frontmatter).map(
            ([key, value]) => `${key}: ${value}`
        ),
        "---",
    ];

    const bodyLines = content.body.split("\n");
    const allLines = [...frontmatterLines, "", ...bodyLines];

    // Track frontmatter state
    let fmDelimiterCount = 0;

    return (
        <div className="overflow-auto h-full font-mono text-[13px] leading-[1.6]">
            {allLines.map((line, i) => {
                const wasFm = fmDelimiterCount;
                if (line === "---") fmDelimiterCount++;
                const inFm =
                    wasFm >= 1 && fmDelimiterCount < 2 && line !== "---";

                return (
                    <div key={i} className="flex leading-[1.6]">
                        <div className="flex-shrink-0 w-[50px] text-right pr-4 select-none text-ide-muted border-r border-ide-border">
                            {i + 1}
                        </div>
                        <div className="flex-1 pl-4 whitespace-pre-wrap break-words min-w-0">
                            {line === "" ? "\u00A0" : highlightLine(line, inFm)}
                        </div>
                    </div>
                );
            })}
            <div className="flex leading-[1.6]">
                <div className="flex-shrink-0 w-[50px] text-right pr-4 select-none text-ide-muted border-r border-ide-border">
                    &nbsp;
                </div>
                <div className="flex-1 pl-4">&nbsp;</div>
            </div>
        </div>
    );
}
