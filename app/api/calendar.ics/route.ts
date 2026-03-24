import { events } from "../../../data/events";
import { generateICS } from "../../../lib/ics";

export async function GET() {
    const icsContent = generateICS(events);

    return new Response(icsContent, {
        headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": "attachment; filename=\"calendar.ics\"",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
