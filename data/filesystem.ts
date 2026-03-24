import { workExperience } from "./content/work-experience";
import { education } from "./content/education";
import { interests } from "./content/interests";
import { github } from "./content/github";
import { linkedin } from "./content/linkedin";
import { x } from "./content/x";
import { hammertimemagazine } from "./content/hammertimemagazine";
import { totalsportlab } from "./content/totalsportlab";
import { morinigallaratipublishing } from "./content/morinigallaratipublishing";
import { sartma } from "./content/sartma";
import { eventsContent } from "./content/events";

export interface VirtualFileContent {
    frontmatter: Record<string, string>;
    body: string;
}

export interface FileNode {
    name: string;
    slug: string;
    type: "file";
    content: VirtualFileContent;
}

export interface FolderNode {
    name: string;
    slug: string;
    type: "folder";
    children: (FileNode | FolderNode)[];
    defaultOpen?: boolean;
}

export type TreeNode = FileNode | FolderNode;

export const fileTree: FolderNode = {
    name: "albertofrattini.com",
    slug: "",
    type: "folder",
    defaultOpen: true,
    children: [
        {
            name: "profile",
            slug: "profile",
            type: "folder",
            defaultOpen: true,
            children: [
                {
                    name: "work-experience.md",
                    slug: "work-experience",
                    type: "file",
                    content: workExperience,
                },
                {
                    name: "education.md",
                    slug: "education",
                    type: "file",
                    content: education,
                },
                {
                    name: "interests.md",
                    slug: "interests",
                    type: "file",
                    content: interests,
                },
            ],
        },
        {
            name: "projects",
            slug: "projects",
            type: "folder",
            defaultOpen: true,
            children: [
                {
                    name: "hammertimemagazine.md",
                    slug: "hammertimemagazine",
                    type: "file",
                    content: hammertimemagazine,
                },
                {
                    name: "totalsportlab.md",
                    slug: "totalsportlab",
                    type: "file",
                    content: totalsportlab,
                },
                {
                    name: "morinigallaratipublishing.md",
                    slug: "morinigallaratipublishing",
                    type: "file",
                    content: morinigallaratipublishing,
                },
                {
                    name: "sartma.md",
                    slug: "sartma",
                    type: "file",
                    content: sartma,
                },
            ],
        },
        {
            name: "events",
            slug: "events",
            type: "folder",
            defaultOpen: true,
            children: [
                {
                    name: "calendar.md",
                    slug: "calendar",
                    type: "file",
                    content: eventsContent,
                },
            ],
        },
        {
            name: "social",
            slug: "social",
            type: "folder",
            defaultOpen: true,
            children: [
                {
                    name: "github.md",
                    slug: "github",
                    type: "file",
                    content: github,
                },
                {
                    name: "linkedin.md",
                    slug: "linkedin",
                    type: "file",
                    content: linkedin,
                },
                {
                    name: "x.md",
                    slug: "x",
                    type: "file",
                    content: x,
                },
            ],
        },
    ],
};

// Build a flat lookup map for O(1) path resolution
const fileMap = new Map<string, FileNode>();

function indexTree(node: TreeNode, pathPrefix: string) {
    const currentPath = pathPrefix
        ? `${pathPrefix}/${node.slug}`
        : node.slug;
    if (node.type === "file") {
        fileMap.set(currentPath, node);
    } else {
        for (const child of node.children) {
            indexTree(child, currentPath);
        }
    }
}

// Index all children of root
for (const child of fileTree.children) {
    indexTree(child, "");
}

export function resolveFile(slugSegments: string[]): FileNode | null {
    const path = slugSegments.join("/");
    return fileMap.get(path) || null;
}

export function getBreadcrumbs(slugSegments: string[]): string[] {
    return ["albertofrattini.com", ...slugSegments];
}

export function getAllFilePaths(): string[][] {
    const paths: string[][] = [];

    function walk(node: TreeNode, segments: string[]) {
        if (node.type === "file") {
            paths.push([...segments, node.slug]);
        } else {
            for (const child of node.children) {
                walk(child, [...segments, node.slug]);
            }
        }
    }

    for (const child of fileTree.children) {
        walk(child, []);
    }

    return paths;
}
