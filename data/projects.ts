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
];
