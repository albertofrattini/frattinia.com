"use client";

import Link from "next/link";
import { TreeNode } from "../../data/filesystem";
import ChevronIcon from "../icons/ChevronIcon";
import FileIcon from "../icons/FileIcon";
import FolderIcon from "../icons/FolderIcon";

interface SidebarItemProps {
    node: TreeNode;
    depth: number;
    pathPrefix: string;
    activePath: string;
    expandedFolders: Set<string>;
    toggleFolder: (path: string) => void;
    onFileClick?: () => void;
}

export default function SidebarItem({
    node,
    depth,
    pathPrefix,
    activePath,
    expandedFolders,
    toggleFolder,
    onFileClick,
}: SidebarItemProps) {
    const currentPath = pathPrefix
        ? `${pathPrefix}/${node.slug}`
        : node.slug;

    if (node.type === "folder") {
        const isExpanded = expandedFolders.has(currentPath);
        return (
            <div>
                <button
                    onClick={() => toggleFolder(currentPath)}
                    className="flex items-center w-full h-[28px] hover:bg-ide-hover text-left"
                    style={{ paddingLeft: `${depth * 16}px` }}
                >
                    <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center mr-1 text-ide-muted">
                        <ChevronIcon expanded={isExpanded} />
                    </span>
                    <span className="flex-shrink-0 mr-1.5">
                        <FolderIcon open={isExpanded} />
                    </span>
                    <span className="truncate text-ide-text">
                        {node.name}
                    </span>
                </button>
                {isExpanded && (
                    <div>
                        {node.children.map((child) => (
                            <SidebarItem
                                key={child.slug}
                                node={child}
                                depth={depth + 1}
                                pathPrefix={currentPath}
                                activePath={activePath}
                                expandedFolders={expandedFolders}
                                toggleFolder={toggleFolder}
                                onFileClick={onFileClick}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    const isActive = `/${currentPath}` === activePath;
    return (
        <Link
            href={`/${currentPath}`}
            onClick={onFileClick}
            className={`flex items-center h-[28px] hover:bg-ide-hover ${
                isActive
                    ? "bg-ide-selected border-l-2 border-ide-accent"
                    : ""
            }`}
            style={{
                paddingLeft: `${depth * 16 + (isActive ? 14 : 16)}px`,
            }}
        >
            <span className="flex-shrink-0 w-4 h-4 mr-1" />
            <span className="flex-shrink-0 mr-1.5">
                <FileIcon />
            </span>
            <span className="truncate text-ide-text">{node.name}</span>
        </Link>
    );
}
