"use client";

import Image from "next/image";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const Playing = () => {
    // TODO change this type
    const { data } = useSWR("/api/now-playing", fetcher) as any;

    return (
        <a
            className="flex items-center gap-1.5 text-[11px] text-ide-muted hover:text-ide-text transition-colors"
            href={data?.songUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                className="rounded-sm"
                height={14}
                width={14}
                quality={100}
                alt="Music album cover"
                src={data?.albumImageUrl || "/static/images/spotify.jpeg"}
            />
            <span className="truncate max-w-[180px]">
                {data?.title || "Not Playing"}
            </span>
        </a>
    );
};

export default Playing;
