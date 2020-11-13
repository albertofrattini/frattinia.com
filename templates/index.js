import React from 'react'
import Image from 'next/image'

import { parseDate } from '../utils/data-reducers'

const BlogPost = ({ frontMatter, children }) => {
    const formattedDate = parseDate(frontMatter.date)

    return (
        <article className="mx-auto w-full max-w-3xl p-8">
            <h1 className="text-4xl md:text-5xl">{frontMatter.title}</h1>
            <div className="frontmatter">
                <div className="flex">
                    <Image
                        className="rounded-full"
                        height="24"
                        width="24"
                        quality="100"
                        src="/images/me.png"
                    />
                    <p>{frontMatter.author}</p>
                </div>
                <p>{formattedDate + ' • ' + frontMatter.readingTime.text}</p>
            </div>
            {children}
        </article>
    )
}

export default BlogPost
