import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import BlogSeo from '../components/BlogSeo'

import { parseDate } from '../utils/data-reducers'

const BlogPost = ({ frontMatter, children }) => {
    const formattedDate = parseDate(frontMatter.date)
    const slug = frontMatter.__resourcePath
        .replace('blog/', '')
        .replace('.mdx', '')

    return (
        <>
            <BlogSeo
                url={`https://albertofrattini.com/blog/${slug}`}
                {...frontMatter}
            />
            <article className="mt-8">
                <h1 className="text-4xl mb-4 font-hsans md:text-5xl">
                    {frontMatter.title}
                </h1>
                <div className="frontmatter">
                    <div className="flex items-center">
                        <Image
                            className="rounded-full"
                            height="32"
                            width="32"
                            quality="100"
                            src="/static/images/avatar.png"
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
