import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, date, url, image }) => {
    const publishedTime = new Date(date).toISOString()
    const featuredImage = {
        url: `https://albertofrattini.com${image}`,
        alt: title,
    }

    return (
        <>
            <NextSeo
                title={`${title} – Alberto Frattini`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime,
                    },
                    url,
                    title,
                    description: summary,
                    ...(image && { images: [featuredImage] }),
                }}
            />
            <ArticleJsonLd
                authorName="Alberto Frattini"
                dateModified={publishedTime}
                datePublished={publishedTime}
                description={summary}
                images={image && [featuredImage]}
                publisherLogo="/static/favicons/android-chrome-192x192.png"
                publisherName="Alberto Frattini"
                title={title}
                url={url}
            />
        </>
    )
}

export default BlogSeo
