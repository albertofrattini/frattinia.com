import React from 'react'
import Head from 'next/head'

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
            __resourcePath: path,
        } = frontMatter

        const slug = path.replace('.mdx', '')
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
        <>
            <Head>
                <title>Blog | Alberto Frattini</title>
                <meta
                    property="og:url"
                    content="https://albertofrattini.com/blog"
                />
                <meta
                    property="og:title"
                    content="Blog | Alberto Frattini"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Blog. This is where my ideas are meeting the paper (or in this case, the screen)"
                    key="description"
                />
            </Head>
            <h1>Blog</h1>
            <p>
                I've never been writing before and I want to make an experiment.
            </p>
            <br />
            <h2>All Posts</h2>
            {renderedPosts}
        </>
    )
}

export default Blog
