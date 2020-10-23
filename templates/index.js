import React from 'react'

import { parseDate } from '../utils/data-reducers'

const BlogPost = ({ frontMatter, children }) => {
    const formattedDate = parseDate(frontMatter.date)

    return (
        <article className="mx-auto w-full max-w-3xl p-8">
            <h1 className="text-4xl md:text-5xl">{frontMatter.title}</h1>
            <div className="frontmatter">
                <div className="flex">
                    <img className="avatar" src="http://tiny.cc/p0o0tz" />
                    <p>{frontMatter.author}</p>
                </div>
                <p>{formattedDate + ' • ' + frontMatter.readingTime.text}</p>
            </div>
            {children}
        </article>
    )
}

export default BlogPost
