import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../components/Card'
import Post from '../components/Post'

import { frontMatter as blogArticle } from './blog/create-blog-nextjs-tailwind.mdx'
import { parseDate } from '../utils/data-reducers'

const Home = () => {
    const homePageArticles = [blogArticle]
    const renderedArticles = homePageArticles.map((article) => {
        const {
            title,
            date,
            readingTime,
            __resourcePath: path,
            summary,
        } = article
        return (
            <Post
                key={title}
                title={title}
                additionalInfo={`${parseDate(date)} • ${readingTime.text}`}
                href={path.replace('.mdx', '')}
            >
                {summary}
            </Post>
        )
    })

    return (
        <>
            <Head>
                <title>Alberto Frattini | Developer</title>
                <meta property="og:url" content="https://albertofrattini.com" />
                <meta
                    property="og:title"
                    content="Alberto Frattini | Developer"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Front-end and Back-end developer, mainly using Javascript alongside React and Node."
                    key="description"
                />
            </Head>
            <section>
                {renderedArticles}
                <div className="flex justify-center">
                    <Link href="/blog">
                        <a className="rounded px-4 py-2 my-8 hover:bg-gray-200">
                            More articles &rarr;
                        </a>
                    </Link>
                </div>
            </section>
            <br />
            <section>
                <h2 className="font-serif underlined-title md:text-4xl">
                    My Projects
                </h2>
                <Card
                    href="https://polimi-hyp-2019-team-10496529.herokuapp.com/"
                    title="Libreggiamo"
                    techs={['Node.js', 'Javascript', 'HTML', 'CSS', 'Heroku']}
                >
                    I didn't know anything about HTML, CSS and JS before this
                    website. And this was happening only in 2019.
                </Card>
                <Card
                    href="http://ilfanta-tradanui.herokuapp.com/"
                    title="Fantacalcio"
                    techs={['Node.js', 'Javascript', 'HTML', 'CSS', 'Heroku']}
                >
                    I decided to create this website to help my friends and I in
                    the Fantasy football auction.
                </Card>
                <Card
                    href="https://i3lab.elet.polimi.it/emozionalmente/"
                    title="Emozionalmente"
                    techs={['Node.js', 'React.js', 'D3']}
                >
                    On this platform, people can record their voice and listen
                    to others' with the purpose of collecting and validating
                    samples lately used in Emotional Speech Recognition.
                </Card>
            </section>
        </>
    )
}

export default Home
