export interface Project {
    name: string;
    slug: string;
    url: string;
    image: string;
    description: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        name: "Hammertime Magazine",
        slug: "hammertimemagazine",
        url: "https://www.hammertimemagazine.com",
        image: "/static/images/projects/hammertimemagazine.png",
        description:
            "An Italian Formula 1 blog covering breaking news, tech insights, and race analysis.",
        tags: ["Next.js", "Blog", "Formula 1", "Italian"],
    },
    {
        name: "Total Sport Lab",
        slug: "totalsportlab",
        url: "https://totalsportlab.com",
        image: "/static/images/projects/totalsportlab.png",
        description:
            "A coaching platform for cycling biomechanics, athletic training, and sports nutrition by Cesare Colombo.",
        tags: ["Next.js", "Sanity CMS", "Sports", "Italian"],
    },
    {
        name: "Morini Gallarati Publishing",
        slug: "morinigallaratipublishing",
        url: "https://morinigallaratipublishing.it",
        image: "/static/images/projects/morinigallaratipublishing.png",
        description:
            "The editorial hub behind Hammer Time and Italian Wheel magazines, offering social media management and automotive content.",
        tags: ["Next.js", "Publishing", "Automotive", "Italian"],
    },
    {
        name: "Sartma",
        slug: "sartma",
        url: "https://sartma.me",
        image: "/static/images/projects/sartma.png",
        description:
            "An AI-built platform for collecting custom sewing orders, managing offerings from an admin panel — built entirely without touching the code.",
        tags: ["Next.js", "Uploadthing", "Neon", "AI Experiment"],
    },
];
