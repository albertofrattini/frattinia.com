import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const Playing = () => {
    const { data } = useSWR('/api/now-playing', fetcher)

    return (
        <a
            className="flex justify-start p-2 mb-12 rounded border border-gray-300"
            href={data ? data.songUrl : '#'}
        >
            <Image
                className="rounded"
                layout="fixed"
                height={64}
                width={64}
                quality="100"
                src={data?.albumImageUrl || '/images/spotify.jpg'}
            />
            <div className="ml-2 overflow-x-hidden">
                <p className="m-0 font-normal truncate">
                    {data && (data.title || 'Song title')}
                </p>
                <p className="m-0 font-normal text-gray-600 truncate">
                    {data && (data.artist || 'Spotify')}
                </p>
            </div>
        </a>
    )
}

export default Playing
