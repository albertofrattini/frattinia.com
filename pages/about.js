import React from 'react'
import Head from 'next/head'

import Timeline from '../components/Timeline'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Alberto Frattini</title>
                <meta
                    property="og:url"
                    content="https://albertofrattini.com/about"
                />
                <meta
                    property="og:title"
                    content="About | Alberto Frattini"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="About me. I’m a developer and, somehow, a creative. Primarily I deal with Javascript and some of the stuff around it, suchs as React and Node."
                    key="description"
                />
            </Head>
            <section>
                <p>
                    Hey, I am Alberto and I’m a developer and, somehow, a
                    creative. Primarily I deal with Javascript and some of the
                    stuff around it, such as React and Node.
                    <br />
                    <br />
                    When I don't write code or create new designs, I like to
                    play football or, eventually, go running. I played guitar,
                    and before it piano, for many years but I don't do it that
                    much anymore, even if I just got an Arturia Minilab MKII and
                    I'm ready to unleash some creative notes on Ableton Live.
                    Another great interest of mine is photography that, combined
                    with my passion for exploring and travelling, creates a
                    great combo. Well, check my pics out on my instagram.
                </p>
            </section>
            <br />
            <section>
                <h2 className="font-serif underlined-title">
                    Technical Skills
                </h2>
                <p>
                    Javascript, React.js, Redux, Next.js, Gatsby.js, Node.js,
                    Express.js, Python, Java, C, HTML, CSS, SQL, Dart, Flutter,
                    D3
                </p>
            </section>
            <br />
            <section>
                <h2 className="font-serif underlined-title">
                    Countries Visited
                </h2>
                <p className="text-xl">
                    🇨🇿 🇮🇹 🇹🇭 🇵🇹 🇪🇸 🇨🇭 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇬 🇳🇱 🇫🇷 🇬🇷 🇦🇱 🇲🇪 🇷🇸 🇭🇷 🇲🇦 🇩🇪 🇮🇸 🇺🇸 🇮🇪
                </p>
            </section>
            <br />
            <section>
                <h2 className="font-serif underlined-title">Timeline</h2>
                <Timeline />
            </section>
        </>
    )
}

export default About
