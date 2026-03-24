export interface CalendarEvent {
    /** Stable unique identifier for ICS UID generation */
    id: string;
    /** Event title, used as SUMMARY in ICS */
    title: string;
    /** Start date: "YYYY-MM-DD" for all-day, ISO 8601 UTC for timed */
    start: string;
    /** End date: "YYYY-MM-DD" (exclusive, day after last day) for all-day, ISO 8601 UTC for timed */
    end: string;
    /** Whether this is an all-day event */
    allDay?: boolean;
    /** Physical location or "Online" */
    location: string;
    /** Plain text description */
    description: string;
    /** Optional URL for the event */
    url?: string;
    /** Event status */
    status?: "CONFIRMED" | "TENTATIVE" | "CANCELLED";
}

export const events: CalendarEvent[] = [
    // === SPECIAL CHAMPIONSHIPS — MARCH ===
    {
        id: "vgc-2026-seville-sc",
        title: "Seville Special Championships",
        start: "2026-03-28T07:30:00Z",
        end: "2026-03-29T17:00:00Z",
        location: "FIBES Congress Center, Seville, Spain",
        description: "Pokemon VGC 2026 Special Championships. Players meeting at 08:30 local time each day. Swiss rounds start immediately after. Note: clocks change overnight from CET to CEST. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-cape-town-sc",
        title: "Cape Town Special Championships",
        start: "2026-03-29T07:30:00Z",
        end: "2026-03-29T20:00:00Z",
        location: "Blaauwberg Beach Hotel, Cape Town, South Africa",
        description: "Pokemon VGC 2026 Special Championships. Single-day event. Check-in from 08:00 SAST, players meeting at 09:30 SAST. All Swiss rounds and Top Cut played on the same day.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === REGIONALS — APRIL ===
    {
        id: "vgc-2026-orlando-regional",
        title: "Orlando Regional Championships",
        start: "2026-04-04T12:30:00Z",
        end: "2026-04-05T23:00:00Z",
        location: "Orange County Convention Center, Halls WD & WE1, Orlando, FL, USA",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 8:30 AM EDT each day. Swiss rounds start immediately after. Badge pickup available Friday 4-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-queretaro-regional",
        title: "Queretaro Regional Championships",
        start: "2026-04-04T14:30:00Z",
        end: "2026-04-06T01:00:00Z",
        location: "Queretaro, Mexico",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 8:30 AM CST each day. Swiss rounds start immediately after. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-prague-regional",
        title: "Prague Regional Championships",
        start: "2026-04-25T06:30:00Z",
        end: "2026-04-26T17:00:00Z",
        location: "PVA Expo Praha, Halls 3 & 4, Prague, Czech Republic",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 08:30 CEST each day. Swiss rounds start immediately after. Badge pickup available Friday 4-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === ONLINE — MAY ===
    {
        id: "vgc-2026-global-challenge",
        title: "Global Challenge",
        start: "2026-05-01T02:00:00Z",
        end: "2026-05-04T01:59:00Z",
        location: "Online — Pokemon Champions Battle Stadium",
        description: "Pokemon VGC 2026 Global Challenge. Online competition using VGC Regulation Set M-A. Play up to 45 battles across the weekend. Sign-ups open April 24. Participation prize: Venusaur in Pokemon Champions.",
        url: "https://championships.pokemon.com/en-us/about/pokemon-vgc-global-challenge-grand-challenge",
        status: "CONFIRMED",
    },

    // === REGIONALS — MAY ===
    {
        id: "vgc-2026-los-angeles-regional",
        title: "Los Angeles Regional Championships",
        start: "2026-05-09T15:30:00Z",
        end: "2026-05-11T02:00:00Z",
        location: "Los Angeles, CA, USA",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 8:30 AM PDT each day. Swiss rounds start immediately after. Badge pickup available Friday 11 AM-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-utrecht-regional",
        title: "Utrecht Regional Championships",
        start: "2026-05-16T06:30:00Z",
        end: "2026-05-17T17:00:00Z",
        location: "Utrecht, Netherlands",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 08:30 CEST each day. Swiss rounds start immediately after. Badge pickup available Friday 4-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-campinas-regional",
        title: "Campinas Regional Championships",
        start: "2026-05-16T11:30:00Z",
        end: "2026-05-17T22:00:00Z",
        location: "Campinas, Brazil",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 08:30 BRT each day. Swiss rounds start immediately after. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-lima-sc",
        title: "Lima Special Championships",
        start: "2026-05-23T13:00:00Z",
        end: "2026-05-25T00:00:00Z",
        location: "Centro de Convenciones del Parque de la Amistad, Santiago de Surco, Lima, Peru",
        description: "Pokemon VGC 2026 Special Championships. Players meeting at 8:00 AM local time (PET) each day. Swiss rounds start immediately after. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-indianapolis-regional",
        title: "Indianapolis Regional Championships",
        start: "2026-05-30T12:30:00Z",
        end: "2026-05-31T23:00:00Z",
        location: "Indiana Convention Center, Halls H & I, Indianapolis, IN, USA",
        description: "Pokemon VGC 2026 Regional Championships. Players meeting at 8:30 AM EDT each day. Swiss rounds start immediately after. Badge pickup available Friday 11 AM-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === JUNE ===
    {
        id: "vgc-2026-turin-sc",
        title: "Turin Special Championships",
        start: "2026-06-06T06:30:00Z",
        end: "2026-06-07T17:00:00Z",
        location: "OVAL Lingotto Fiere, Turin, Italy",
        description: "Pokemon VGC 2026 Special Championships. Players meeting at 08:30 CEST each day. Swiss rounds start immediately after. Badge pickup available Friday 4-7 PM. End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === INTERNATIONAL ===
    {
        id: "vgc-2026-naic",
        title: "North America International Championships (NAIC)",
        start: "2026-06-12T14:00:00Z",
        end: "2026-06-15T00:00:00Z",
        location: "New Orleans, LA, USA",
        description: "Pokemon VGC 2026 North America International Championships. VGC, TCG, Pokemon GO, and Pokemon UNITE. Players meeting expected at 9:00 AM CDT each day (based on 2025 schedule — exact 2026 times TBA). End time is approximate.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
];
