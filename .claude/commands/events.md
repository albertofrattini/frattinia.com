# Event Calendar Manager

You are managing Alberto's personal events calendar on his website. The calendar is an ICS feed served at `https://albertofrattini.com/api/calendar.ics` that his iPhone subscribes to. Events come from any domain — gaming tournaments, design conferences, product launches, concerts, whatever Alberto is interested in.

## Step 1: Load Context

Before doing anything, read these two files:

1. **Interests & preferences**: `.claude/calendar/interests.md` — Alberto's interests, known sources per topic, exclusions, and research notes accumulated over time. This is the knowledge base that makes the skill smarter with each use.
2. **Current events**: `data/events.ts` — the existing events array. Needed to avoid duplicates.

## Step 2: Determine What to Search For

**If the user specified a topic** (e.g., "find VGC regionals in July", "add Milan Design Week events", "upcoming Nintendo Switch 2 game releases"), search for exactly that.

**If the user just invoked `/events` with no specifics**, scan the interests file and search for new events across ALL of Alberto's known interests. Cover each interest category, focusing on the next 2-3 months. This is the "surprise me with everything relevant" mode.

## Step 3: Research Events Online

For each topic area, use the best sources available. The interests file may list preferred sources for specific topics — use those first, then supplement with general web searches.

**General research approach:**
- Search with specific queries: include the year, date range, and topic keywords
- Cross-reference at least 2 sources when dates are ambiguous
- Gather for each event: exact name, exact dates **and times**, city/country/venue, description, official URL
- Note registration status, ticket availability, or any relevant logistics if visible
- **Always try to find specific start/end times**, not just dates. Check official event pages, registration pages, and schedules for exact hours. Times make events far more useful on a phone calendar.

**When researching a topic for the first time**, take note of which sources were most useful. You'll save these to the interests file later so future searches are faster.

## Step 4: Filter and Deduplicate

Before presenting results:

1. **Check interests** — exclude anything matching the user's known exclusions
2. **Check for duplicates** — compare against `data/events.ts` by matching on `id` or by matching title + overlapping dates
3. **Flag updates** — if an existing event's dates or venue have changed, flag it as an update

## Step 5: Present Findings (ALWAYS DO THIS)

**Never add events without asking first.** Present what you found in a clear list grouped by topic and month:

- Event name
- Dates
- Location
- Category/topic
- Whether it's new, an update, or already in the calendar

Ask which ones to add. Wait for confirmation.

## Step 6: Add Confirmed Events

After confirmation, add events to `data/events.ts` following this structure:

### CalendarEvent Interface

```typescript
{
    id: string,          // kebab-case: "{topic}-{year}-{name-or-city}"
    title: string,       // human-readable event name
    start: string,       // "YYYY-MM-DD" for all-day, or ISO 8601 UTC for timed (e.g. "2026-04-04T07:00:00Z")
    end: string,         // "YYYY-MM-DD" (EXCLUSIVE — day AFTER last day) for all-day, or ISO 8601 UTC for timed
    allDay?: boolean,    // true ONLY when specific times are not available
    location: string,    // "Venue, City, Country" — as specific as possible
    description: string, // plain text summary — include secondary times and logistics here
    url?: string,        // official event page
    status?: "CONFIRMED" | "TENTATIVE" | "CANCELLED"  // defaults to CONFIRMED
}
```

### Prefer Specific Times Over All-Day Events

Always try to use specific start/end times rather than all-day events. Timed events are much more useful on a phone calendar — they show up at the right time with reminders.

- **Use timed events** when you can find specific hours (even approximate ones). Store times in ISO 8601 UTC format: `"2026-04-04T07:00:00Z"`. Convert from the event's local timezone to UTC.
- **Use all-day events** (`allDay: true`) only as a fallback when no times are available at all.
- **Multi-day events with times**: Create the event from the start time on day 1 to the end time on the last day. For example, a tournament running 9 AM–6 PM Saturday and 9 AM–5 PM Sunday (local) becomes one event from Saturday 9 AM to Sunday 5 PM (in UTC).

### Handling Multiple Times

Events often have multiple relevant times (doors open vs show starts, registration vs round 1, etc.). Use judgment to pick the most actionable time as the event start, and put the other times in the description.

**Examples:**
- Concert: doors open 7 PM, band starts 9 PM → start = 7 PM, description includes "Band starts at 9 PM"
- Tournament: registration 8 AM, round 1 at 9 AM → start = 8 AM, description includes "Round 1 starts at 9 AM"
- Conference: doors open 8:30 AM, keynote 9 AM → start = 8:30 AM, description includes "Keynote at 9 AM"

The principle: pick the time Alberto should plan to arrive, and note the "main action" time in the description.

### Timezone Handling

Events happen in local timezones but ICS stores UTC. When adding timed events:
1. Find the event's local time and timezone
2. Convert to UTC for the `start`/`end` fields
3. Mention the local time in the description so it's human-readable: "Starts at 9:00 AM local time (CEST)"

Common offsets (adjust for DST):
- US Eastern: UTC-4 (EDT) / UTC-5 (EST)
- US Central: UTC-5 (CDT) / UTC-6 (CST)
- US Pacific: UTC-7 (PDT) / UTC-8 (PST)
- Central Europe: UTC+2 (CEST) / UTC+1 (CET)
- Japan/Korea: UTC+9 (no DST)
- Australia Eastern: UTC+10 (AEST) / UTC+11 (AEDT)

### Critical: End Date is Exclusive for All-Day Events

Per ICS spec, `end` for all-day events is the day AFTER the last day. A 2-day event on April 4–5:
- `start: "2026-04-04"`
- `end: "2026-04-06"` ← April 6, not 5

### ID Convention

Pattern: `{topic-slug}-{year}-{identifier}`

Examples:
- `vgc-2026-orlando-regional`
- `design-2026-milan-design-week`
- `nintendo-2026-switch2-metroid`

### Ordering

Keep events sorted chronologically. Use section comments to group by topic or month when it helps readability.

## Step 7: Update Interests

After each interaction, update `.claude/calendar/interests.md` if you learned something new:

- **New interest added** — the user asked about a new topic (e.g., "find Switch 2 launches"). Add a new interest section with what you learned about good sources, what to include/exclude, and any research notes.
- **Exclusion learned** — the user rejected certain types of events or said they don't care about something. Record it so you don't suggest it again.
- **Better sources found** — you discovered a great website for a specific topic. Save it for next time.
- **Patterns noticed** — geographic preferences, date range preferences, or any other curation signal.

The interests file should grow into a comprehensive profile of what Alberto wants to see on his calendar. Each interest section should have enough context that a future invocation can search effectively without any user input.

Only update when there's genuinely new information — don't rewrite on every invocation.

## Step 8: Verify

After adding events, run `npm run build` to confirm the site builds. The ICS feed updates automatically on deploy.

## Troubleshooting

- **Build fails**: Check TypeScript syntax in `data/events.ts` — missing commas, unclosed strings.
- **ICS empty in dev mode**: Known quirk with `.ics` directory name. Test with `npm run build && npx next start`.
- **Events page shows wrong upcoming/past split**: `data/content/events.ts` computes this at build time based on the current date.
