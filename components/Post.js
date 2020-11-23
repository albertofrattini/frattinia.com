import React from 'react'

import Link from 'next/link'

const Post = ({ href, title, additionalInfo, children }) => {
    return (
        <Link href={href}>
            <a>
                <div className="mb-8">
                    <h3 className="font-hsans text-2xl md:text-3xl">{title}</h3>
                    <p className="mb-0">{children}</p>
                    {additionalInfo && (
                        <p className="mt-3 text-sm text-gray-700">
                            {additionalInfo}
                        </p>
                    )}
                </div>
            </a>
        </Link>
    )
}

export default Post
