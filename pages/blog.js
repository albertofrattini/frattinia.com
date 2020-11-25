import React, { useState } from 'react'

import { NextSeo } from 'next-seo'

import Post from '../components/Post'

import { frontMatter as blogPosts } from './blog/**/*.mdx'
import { parseDate } from '../utils/data-reducers'

const url = 'https://albertofrattini.com/blog'
const title = 'Blog – Alberto Frattini'
const description =
    'Here you can find enlighting ideas on programming, music and photography, book reviews, travelling tips and great stories.'

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
            <NextSeo
                title={title}
                canonical={url}
                description={description}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />
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
