# Event Calendar — Interests & Preferences

This file is the knowledge base for `/events`. It captures what Alberto is interested in, where to find events, and what to exclude. It grows over time as new interests are added and preferences are refined.

---

## Pokemon VGC (Video Game Championships)

Competitive Pokémon tournament circuit. Alberto follows the Championship Series calendar closely.

### Include
- Regional Championships — all regions (NA, EU, LATAM, Oceania, Asia)
- Special Championships — all regions
- International Championships — NAIC, EUIC, LAIC, OCIC
- Global Challenges — online ladder competitions via Battle Stadium
- Grand Challenges — online competitions (weekend format, 45 battles max)

### Exclude
- Master Ball Leagues — Asia-region national championships (Philippines, Hong Kong, Malaysia, Thailand, Singapore, Taiwan). Alberto explicitly asked to remove these.
- Japan Championships (JCS) — national championship requiring qualification in Japan, removed with Master Ball Leagues.

### Best Sources
1. **Victory Road** (`victoryroad.pro/{year}-season-calendar/`) — most comprehensive VGC-specific calendar, most accurate dates
2. **Serebii** (`serebii.net/playpokemon/{year}.shtml`) — good for cross-referencing dates and event details
3. **Official Pokemon** (`championships.pokemon.com/en-us/events`) — authoritative but loads dynamically, sometimes harder to scrape
4. **Nimbasa City Post** (`nimbasacitypost.com`) — good for VGC season structure and rule info

### Research Notes
- The current season is VGC 2026 (September 2025 through Worlds 2026 in San Francisco).
- Events are typically 2-day (Sat-Sun) for Regionals/Specials, 3-day for large Regionals, 3-4 day for Internationals.
- Some sources list broader date spans (Fri-Sun) that include TCG/Pokemon GO days. Use the broadest official dates to be safe.
- When dates differ between sources, Victory Road's VGC-specific dates are usually most accurate.
- ID pattern: `vgc-{year}-{city}-{type}` (types: `regional`, `sc`, `naic`, `euic`, `laic`, `ocic`, `global-challenge`, `grand-challenge`)

### Typical Schedule & Times
- **Victory Road individual event pages** (`victoryroad.pro/{year}-{city}/`) are the best source for exact times — they list players meeting times in both local and UTC.
- Standard Regionals/Specials: Players meeting at 08:30 local time each day. Swiss rounds start immediately after.
- Lima SC is an exception: players meeting at 08:00 local time.
- Internationals: Players meeting typically at 09:00 local time (based on 2025 NAIC).
- Global/Grand Challenges: exact UTC times from Victory Road or Bulbagarden — usually start at 02:00 UTC on day 1.
- **End times are never published.** Estimate ~19:00 local for day 2 of 2-day events. Single-day events (like Cape Town SC) can run until ~22:00 local. Note "End time is approximate" in descriptions.
- Badge pickup is usually available the day before (Friday) from 4-7 PM local, or early morning of day 1 from ~07:00 local.
- Team list submission deadline is always 3 hours before the event starts.

---

## Global Preferences

These apply across all interest categories.

### Date Range
When searching without specific instructions, look for events in the next 2-3 months from today. Keeps the calendar useful without clutter.

### Geography
No global geographic filter — covers all regions unless a specific interest says otherwise.
