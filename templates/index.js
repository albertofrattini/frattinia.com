import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import { parseDate } from '../utils/data-reducers'

const BlogPost = ({ frontMatter, children }) => {
    const formattedDate = parseDate(frontMatter.date)

    return (
        <>
            <Head>
                <title>{frontMatter.title + ' | Alberto Frattini'}</title>
                <meta property="og:url" content="https://albertofrattini.com" />
                <meta
                    property="og:title"
                    content={frontMatter.title + ' | Alberto Frattini'}
                    key="title"
                />
                <meta
                    property="og:description"
                    content={frontMatter.summary}
                    key="description"
                />
            </Head>
            <article className="mt-8">
                <h1 className="text-4xl mb-4 md:text-5xl">
                    {frontMatter.title}
                </h1>
                <div className="frontmatter">
                    <div className="flex items-center">
                        <Image
                            className="rounded-full"
                            height="24"
                            width="24"
                            quality="100"
                            src="/images/me.png"
                        />
                        <p>{frontMatter.author}</p>
                    </div>
                    <p>
                        {formattedDate + ' • ' + frontMatter.readingTime.text}
                    </p>
                </div>
                {children}
            </article>
        </>
    )
}

export default BlogPost
