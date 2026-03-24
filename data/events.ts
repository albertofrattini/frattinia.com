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
    // === SPECIAL CHAMPIONSHIPS ===
    {
        id: "vgc-2026-seville-sc",
        title: "Seville Special Championships",
        start: "2026-03-28",
        end: "2026-03-30",
        allDay: true,
        location: "FIBES Congress Center, Seville, Spain",
        description: "Pokemon VGC 2026 Special Championships in Seville. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-cape-town-sc",
        title: "Cape Town Special Championships",
        start: "2026-03-29",
        end: "2026-03-30",
        allDay: true,
        location: "Cape Town, South Africa",
        description: "Pokemon VGC 2026 Special Championships in Cape Town.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === REGIONALS — APRIL ===
    {
        id: "vgc-2026-orlando-regional",
        title: "Orlando Regional Championships",
        start: "2026-04-04",
        end: "2026-04-06",
        allDay: true,
        location: "Orange County Convention Center, Orlando, FL, USA",
        description: "Pokemon VGC 2026 Regional Championships in Orlando. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-queretaro-regional",
        title: "Queretaro Regional Championships",
        start: "2026-04-04",
        end: "2026-04-06",
        allDay: true,
        location: "Queretaro, Mexico",
        description: "Pokemon VGC 2026 Regional Championships in Queretaro. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-prague-regional",
        title: "Prague Regional Championships",
        start: "2026-04-25",
        end: "2026-04-27",
        allDay: true,
        location: "Prague, Czech Republic",
        description: "Pokemon VGC 2026 Regional Championships in Prague. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === ONLINE — MAY ===
    {
        id: "vgc-2026-global-challenge",
        title: "Global Challenge",
        start: "2026-05-01",
        end: "2026-05-05",
        allDay: true,
        location: "Online",
        description: "Pokemon VGC 2026 Global Challenge. Online ladder competition played via Battle Stadium. Sign-ups open April 24.",
        url: "https://championships.pokemon.com/en-us/about/pokemon-vgc-global-challenge-grand-challenge",
        status: "CONFIRMED",
    },
    // === REGIONALS — MAY ===
    {
        id: "vgc-2026-los-angeles-regional",
        title: "Los Angeles Regional Championships",
        start: "2026-05-09",
        end: "2026-05-11",
        allDay: true,
        location: "Los Angeles, CA, USA",
        description: "Pokemon VGC 2026 Regional Championships in Los Angeles. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-utrecht-regional",
        title: "Utrecht Regional Championships",
        start: "2026-05-16",
        end: "2026-05-18",
        allDay: true,
        location: "Utrecht, Netherlands",
        description: "Pokemon VGC 2026 Regional Championships in Utrecht. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-campinas-regional",
        title: "Campinas Regional Championships",
        start: "2026-05-16",
        end: "2026-05-18",
        allDay: true,
        location: "Campinas, Brazil",
        description: "Pokemon VGC 2026 Regional Championships in Campinas. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-lima-sc",
        title: "Lima Special Championships",
        start: "2026-05-23",
        end: "2026-05-25",
        allDay: true,
        location: "Lima, Peru",
        description: "Pokemon VGC 2026 Special Championships in Lima. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    {
        id: "vgc-2026-indianapolis-regional",
        title: "Indianapolis Regional Championships",
        start: "2026-05-30",
        end: "2026-06-01",
        allDay: true,
        location: "Indianapolis, IN, USA",
        description: "Pokemon VGC 2026 Regional Championships in Indianapolis. Sign-ups open April 1.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },

    // === JUNE ===
    {
        id: "vgc-2026-turin-sc",
        title: "Turin Special Championships",
        start: "2026-06-06",
        end: "2026-06-08",
        allDay: true,
        location: "Turin, Italy",
        description: "Pokemon VGC 2026 Special Championships in Turin. VGC, TCG, and Pokemon GO.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
    // === INTERNATIONAL ===
    {
        id: "vgc-2026-naic",
        title: "North America International Championships (NAIC)",
        start: "2026-06-12",
        end: "2026-06-15",
        allDay: true,
        location: "New Orleans, LA, USA",
        description: "Pokemon VGC 2026 North America International Championships. VGC, TCG, Pokemon GO, and Pokemon UNITE.",
        url: "https://championships.pokemon.com/en-us/events",
        status: "CONFIRMED",
    },
];
