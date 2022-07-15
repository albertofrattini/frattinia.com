import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const Playing = () => {
    // TODO change this type
    const { data } = useSWR('/api/now-playing', fetcher) as any;

    return (
        <div className="w-full">
            <a
                className="flex justify-center items-center"
                href={data ? data.songUrl : '#'}
            >
                <div className="h-6 w-4">
                    <Image
                        className="rounded"
                        priority={true}
                        layout="fixed"
                        height={16}
                        width={16}
                        quality="100"
                        src={
                            data?.albumImageUrl || '/static/images/spotify.jpeg'
                        }
                    />
                </div>
                <div className="h-6 ml-3 text-base overflow-x-hidden">
                    <span className="m-0 ">
                        {data && (data.title || 'Not Playing')}
                    </span>
                </div>
            </a>
        </div>
    );
};

export default Playing;
