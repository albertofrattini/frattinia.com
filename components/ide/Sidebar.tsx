"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fileTree } from "../../data/filesystem";
import SidebarItem from "./SidebarItem";
import FolderIcon from "../icons/FolderIcon";

export default function Sidebar({ onFileClick }: { onFileClick?: () => void }) {
    const pathname = usePathname();
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
        new Set()
    );

    // Auto-expand folders on mount and when path changes
    useEffect(() => {
        const newExpanded = new Set(expandedFolders);

        // Expand default-open folders
        function walkDefaults(
            node: typeof fileTree,
            pathPrefix: string
        ) {
            if (node.type === "folder") {
                const currentPath = pathPrefix
                    ? `${pathPrefix}/${node.slug}`
                    : node.slug;
                if (node.defaultOpen) {
                    newExpanded.add(currentPath);
                }
                for (const child of node.children) {
                    if (child.type === "folder") {
                        walkDefaults(child as typeof fileTree, currentPath);
                    }
                }
            }
        }
        walkDefaults(fileTree, "");

        // Expand ancestors of active path
        if (pathname !== "/") {
            const segments = pathname.slice(1).split("/");
            let accumulated = "";
            for (let i = 0; i < segments.length - 1; i++) {
                accumulated = accumulated
                    ? `${accumulated}/${segments[i]}`
                    : segments[i];
                newExpanded.add(accumulated);
            }
        }

        setExpandedFolders(newExpanded);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const toggleFolder = (path: string) => {
        setExpandedFolders((prev) => {
            const next = new Set(prev);
            if (next.has(path)) {
                next.delete(path);
            } else {
                next.add(path);
            }
            return next;
        });
    };

    return (
        <div className="h-full flex flex-col bg-ide-sidebar border-r border-ide-border select-none">
            {/* Project header */}
            <div className="flex items-center h-[36px] px-3 border-b border-ide-border text-[12px] font-semibold text-ide-text uppercase tracking-wide">
                <span className="mr-2">
                    <FolderIcon open={true} />
                </span>
                albertofrattini.com
            </div>

            {/* File tree */}
            <div className="flex-1 overflow-y-auto py-1 text-[13px]">
                {fileTree.children.map((child) => (
                    <SidebarItem
                        key={child.slug}
                        node={child}
                        depth={1}
                        pathPrefix=""
                        activePath={pathname}
                        expandedFolders={expandedFolders}
                        toggleFolder={toggleFolder}
                        onFileClick={onFileClick}
                    />
                ))}
            </div>
        </div>
    );
}
