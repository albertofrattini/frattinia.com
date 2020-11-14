import React from 'react'
import Head from 'next/head'

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
            <h1>About Me</h1>
            <p>
                Hey, I am Alberto and I’m a developer and, somehow, a creative.
                Primarily I deal with Javascript and some of the stuff around
                it, suchs as React and Node.
                <br />
                <br />
                Despite being a developer, the stereotype of a nerd, I can't
                list myself among these wonderful creatures. On the other side,
                I am a social person that likes to create new things, speak and
                collaborate with others to reach great goals.
                <br />
                <br />
                When I don't write code or create new designs, I like to play
                football or, eventually, go running. I played guitar, and before
                it piano, for many years but I don't do it that much anymore,
                even if I just got an Arturia Minilab MKII and I'm ready to
                unleash some creative notes on Ableton Live. Another great
                interest of mine is photography that, combined with my passion
                for exploring and travelling, creates a great combo for awesome
                pictures (maybe I should be more modest 🤔). Well, check my pics
                out on my instagram.
            </p>
            <br />
            <h2>Technical Skills</h2>
            <p>
                Javascript, React.js, Redux, Next.js, Gatsby.js, Node.js,
                Express.js, Python, Java, C, HTML, CSS, SQL, Dart, Flutter, D3
            </p>
            <br />
            <h2>Countries Visited</h2>
            <p className="text-xl">
                🇨🇿 🇮🇹 🇹🇭 🇵🇹 🇪🇸 🇨🇭 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇬 🇳🇱 🇫🇷 🇬🇷 🇦🇱 🇲🇪 🇷🇸 🇭🇷 🇲🇦 🇩🇪 🇮🇸 🇺🇸 🇮🇪 🇦🇹
                🇸🇮 🇧🇦
            </p>
        </>
    )
}

export default About
