import React from 'react'

import Timeline from '../components/Timeline'
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
        <div className="mx-auto w-full max-w-3xl p-8">
            <h1>Hey, I am Alberto</h1>
            <p>
                I’m a developer and, somehow, a creative. You’ve found my
                personal slice of the internet – everything you want to know and
                more is here.
            </p>
            <br />
            <section>
                <h2>From my Blog</h2>
                {renderedArticles}
            </section>
            <br />
            <section>
                <h2>Projects</h2>
                <Card
                    href="https://polimi-hyp-2019-team-10496529.herokuapp.com/"
                    title="📚 Libreggiamo"
                    techs={['Node.js', 'Javascript', 'HTML', 'CSS', 'Heroku']}
                >
                    This website is the very first one that I created. I didn't
                    know nothing about HTML, CSS and JS before. And this what
                    happening only in 2019. My collaborator: Gabriele
                    Ghiringhelli.
                </Card>
                <Card
                    href="http://ilfanta-tradanui.herokuapp.com/"
                    title="⚽ Fantacalcio"
                    techs={['Node.js', 'Javascript', 'HTML', 'CSS', 'Heroku']}
                >
                    Wanting to practice more the knowledge I acquired while
                    creating Libreggiamo project, I decided to create this
                    website to help my friends and I in the Fantasy football
                    auction.
                </Card>
                <Card
                    href="https://i3lab.elet.polimi.it/emozionalmente/"
                    title="😊 Emozionalmente"
                    techs={['Node.js', 'React.js', 'D3']}
                >
                    This is the <i>visible outcome</i> of my Master Thesis.
                    Through the use of React and Node, I created this platform
                    where people can record their voice and listen to others'
                    with the purpose of collecting and validating samples lately
                    used in Emotional Speech Recognition.
                </Card>
            </section>
            <br />
            <section>
                <h2>Timeline</h2>
                <Timeline />
            </section>
        </div>
    )
}

export default Home
