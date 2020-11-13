import React from 'react'

import Link from 'next/link'

const Post = ({ href, title, additionalInfo, children }) => {
    return (
        <Link href={href}>
            <a>
                <div className="mb-8">
                    <h3 className="hover:underline">{title}</h3>
                    <p className="mb-0">{children}</p>
                    {additionalInfo && (
                        <p className="mt-2 text-xs text-gray-700">
                            {additionalInfo}
                        </p>
                    )}
                </div>
            </a>
        </Link>
    )
}

export default Post
