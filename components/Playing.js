import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const Playing = () => {
    const { data } = useSWR('/api/now-playing', fetcher)

    return (
        <div className="w-full">
            <a
                className="flex justify-start p-2 mb-12 max-w-xs mx-auto rounded border border-gray-300"
                href={data ? data.songUrl : '#'}
            >
                <div className="h-16 w-16 rounded">
                    <Image
                        className="rounded"
                        layout="fixed"
                        height={64}
                        width={64}
                        quality="100"
                        src={
                            data?.albumImageUrl || '/static/images/spotify.png'
                        }
                    />
                </div>
                <div className="ml-3 overflow-x-hidden">
                    <p className="m-0 truncate">
                        {data && (data.title || 'Not Playing')}
                    </p>
                    <p className="m-0 text-gray-600 truncate">
                        {data && (data.artist || 'Spotify')}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Playing
