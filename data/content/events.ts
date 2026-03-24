import { events, CalendarEvent } from "../events";

function formatEventDate(dateStr: string, allDay?: boolean): string {
    if (allDay) {
        const d = new Date(dateStr + "T00:00:00Z");
        return d.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });
    }
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
    });
}

function formatDateRange(event: CalendarEvent): string {
    if (event.allDay) {
        const startDate = new Date(event.start + "T00:00:00Z");
        // end is exclusive for all-day events, so subtract 1 day for display
        const endDate = new Date(event.end + "T00:00:00Z");
        endDate.setUTCDate(endDate.getUTCDate() - 1);

        if (startDate.getTime() === endDate.getTime()) {
            return formatEventDate(event.start, true);
        }
        return `${formatEventDate(event.start, true)} - ${formatEventDate(
            endDate.toISOString().split("T")[0],
            true
        )}`;
    }
    return `${formatEventDate(event.start)} - ${formatEventDate(event.end)} (UTC)`;
}

function renderEvent(event: CalendarEvent): string {
    const lines = [
        `### ${event.title}`,
        `_${formatDateRange(event)}_`,
        "",
        `**Location:** ${event.location}`,
        "",
        event.description,
    ];
    if (event.url) {
        lines.push("", `[Event link](${event.url})`);
    }
    return lines.join("\n");
}

const SITE_URL = "https://albertofrattini.com";

const now = new Date();
const upcoming = events
    .filter((e) => new Date(e.end) >= now)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

const past = events
    .filter((e) => new Date(e.end) < now)
    .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

const bodyParts = [
    "# Events",
    "",
    "## Subscribe to my calendar",
    "",
    "Add my events to your calendar app:",
    "",
    `- [Subscribe via webcal (iPhone/Mac)](webcal://albertofrattini.com/api/calendar.ics)`,
    `- [Download .ics file](${SITE_URL}/api/calendar.ics)`,
    "",
    "### How to subscribe on iPhone",
    "",
    "Tap the **webcal link** above from Safari, or go to **Settings > Calendar > Accounts > Add Account > Other > Add Subscribed Calendar** and enter:",
    "",
    `${SITE_URL}/api/calendar.ics`,
    "",
];

if (upcoming.length > 0) {
    bodyParts.push("## Upcoming Events", "");
    for (const event of upcoming) {
        bodyParts.push(renderEvent(event), "");
    }
} else {
    bodyParts.push("## Upcoming Events", "", "_No upcoming events scheduled._", "");
}

if (past.length > 0) {
    bodyParts.push("## Past Events", "");
    for (const event of past) {
        bodyParts.push(renderEvent(event), "");
    }
}

export const eventsContent = {
    frontmatter: {
        title: "Events",
        author: "Alberto Frattini",
        calendar: `${SITE_URL}/api/calendar.ics`,
    },
    body: bodyParts.join("\n"),
};
