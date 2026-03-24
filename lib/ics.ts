import { CalendarEvent } from "../data/events";

const CRLF = "\r\n";

function escapeText(text: string): string {
    return text
        .replace(/\\/g, "\\\\")
        .replace(/;/g, "\\;")
        .replace(/,/g, "\\,")
        .replace(/\n/g, "\\n");
}

function foldLine(line: string): string {
    const maxLen = 75;
    if (Buffer.byteLength(line, "utf-8") <= maxLen) {
        return line;
    }
    const parts: string[] = [];
    let remaining = line;
    let first = true;
    while (Buffer.byteLength(remaining, "utf-8") > maxLen) {
        const limit = first ? maxLen : maxLen - 1;
        let cut = limit;
        while (cut > 0 && Buffer.byteLength(remaining.slice(0, cut), "utf-8") > limit) {
            cut--;
        }
        parts.push(remaining.slice(0, cut));
        remaining = remaining.slice(cut);
        first = false;
    }
    if (remaining) {
        parts.push(remaining);
    }
    return parts.join(CRLF + " ");
}

/** Format ISO datetime to ICS UTC format: 20260615T180000Z */
function formatDateTimeUTC(iso: string): string {
    return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Format date string "YYYY-MM-DD" to ICS date format: 20260615 */
function formatDate(date: string): string {
    return date.replace(/-/g, "");
}

function formatNow(): string {
    return formatDateTimeUTC(new Date().toISOString());
}

export function generateICS(calendarEvents: CalendarEvent[]): string {
    const lines: string[] = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//albertofrattini.com//Events//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:Alberto Frattini Events",
    ];

    const now = formatNow();

    for (const event of calendarEvents) {
        lines.push("BEGIN:VEVENT");
        lines.push(foldLine(`UID:${event.id}@albertofrattini.com`));
        lines.push(`DTSTAMP:${now}`);

        if (event.allDay) {
            lines.push(`DTSTART;VALUE=DATE:${formatDate(event.start)}`);
            lines.push(`DTEND;VALUE=DATE:${formatDate(event.end)}`);
        } else {
            lines.push(`DTSTART:${formatDateTimeUTC(event.start)}`);
            lines.push(`DTEND:${formatDateTimeUTC(event.end)}`);
        }

        lines.push(foldLine(`SUMMARY:${escapeText(event.title)}`));
        lines.push(foldLine(`DESCRIPTION:${escapeText(event.description)}`));
        lines.push(foldLine(`LOCATION:${escapeText(event.location)}`));
        if (event.url) {
            lines.push(foldLine(`URL:${event.url}`));
        }
        lines.push(`STATUS:${event.status || "CONFIRMED"}`);
        lines.push("END:VEVENT");
    }

    lines.push("END:VCALENDAR");

    return lines.join(CRLF) + CRLF;
}
