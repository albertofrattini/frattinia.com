import React from 'react'

import Post from '../components/Post'

import { frontMatter as blogPosts } from './blog/**/*.mdx'
import { parseDate } from '../utils/data-reducers'

const Blog = () => {
    const renderedPosts = blogPosts.map((frontMatter) => {
        const {
            title,
            date,
            summary,
            readingTime,
            __resourcePath,
        } = frontMatter

        const slug = __resourcePath.replace('.mdx', '')
        const formattedDate = parseDate(date)

        return (
            <Post
                key={frontMatter.title}
                title={title}
                additionalInfo={`${formattedDate} • ${readingTime.text}`}
                href={slug}
            >
                {summary}
            </Post>
        )
    })

    return (
        <div className="mx-auto w-full max-w-3xl p-8">
            <h1>Blog</h1>
            <p>
                I've never been writing before and I want to make an experiment.
            </p>
            <br />
            <h2>All Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default Blog
