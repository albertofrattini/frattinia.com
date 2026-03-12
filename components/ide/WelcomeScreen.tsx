"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function WelcomeScreen() {
    return (
        <div className="flex-1 overflow-auto">
            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Header */}
                <div className="mb-10 text-center">
                    <pre className="text-[10px] leading-tight mb-4 hidden sm:block text-ide-muted">{`    _   _ _               _        __          _   _   _       _
   /_\\ | | |__  ___ _ __| |_ ___ / _|_ _ __ _| |_| |_(_)_ _ (_)
  / _ \\| | '_ \\/ -_) '_|  _/ _ \\  _| '_/ _\` |  _|  _| | ' \\| |
 /_/ \\_\\_|_.__/\\___|_|  \\__\\___/_| |_| \\__,_|\\__|\\__|_|_||_|_|`}</pre>
                    <p className="text-[13px] text-ide-muted">
                        Lead Engineer @{" "}
                        <span className="text-ide-text font-semibold">
                            STRV
                        </span>{" "}
                        &middot; Browse the sidebar to explore my profile,
                        projects, and socials.
                    </p>
                </div>

                {/* Projects section */}
                <div className="mb-8">
                    <h2 className="text-[13px] font-semibold text-ide-muted uppercase tracking-wider mb-4 border-b border-ide-border pb-2">
                        <span className="text-ide-accent">#</span> Projects
                    </h2>

                    <div className="grid gap-4">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group block border border-ide-border rounded hover:border-ide-accent transition-colors overflow-hidden"
                            >
                                <div className="flex flex-col sm:flex-row">
                                    {/* Image */}
                                    <div className="sm:w-[280px] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-ide-border overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={560}
                                            height={350}
                                            className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                                        <div>
                                            <h3 className="text-[14px] font-semibold text-ide-text group-hover:text-ide-accent transition-colors mb-1">
                                                {project.name}
                                            </h3>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[12px] text-ide-string hover:underline"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                {project.url.replace(
                                                    /^https?:\/\/(www\.)?/,
                                                    ""
                                                )}
                                            </a>
                                            <p className="text-[12px] text-ide-muted mt-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] px-2 py-0.5 rounded border border-ide-border text-ide-muted"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
