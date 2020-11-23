import React, { useState } from 'react'
import Head from 'next/head'

import Post from '../components/Post'

import { frontMatter as blogPosts } from './blog/**/*.mdx'
import { parseDate } from '../utils/data-reducers'

const Blog = () => {
    const [search, setSearch] = useState('')

    const renderedPosts = blogPosts
        .filter(({ title }) =>
            search
                ? title.toLowerCase().includes(search.toLowerCase())
                    ? true
                    : false
                : true
        )
        .map((frontMatter) => {
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
            <section>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="🔍 Search for an article"
                ></input>
            </section>
            <br />
            {renderedPosts}
        </>
    )
}

export default Blog
