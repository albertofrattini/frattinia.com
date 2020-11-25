import React from 'react'

import { NextSeo } from 'next-seo'

import Timeline from '../components/Timeline'

const url = 'https://albertofrattini.com/about'
const title = 'About Me – Alberto Frattini'

const About = () => {
    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            <section>
                <p>
                    I am an Italian developer 👨🏻‍💻 and, somehow, a creative. I am
                    now living in Prague 🏰 and I am working as a Software
                    Engineer at Socialbakers.
                </p>
            </section>
            <br />
            <section>
                <h2 className="font-serif underlined-title">
                    What I Like Doing
                </h2>
                <p>
                    Primarily I deal with Javascript and some of the stuff
                    around it, such as React and Node. When I don't write code
                    or create new designs, I like to play football ⚽ or,
                    eventually, go running 🏃. I played guitar 🎸, and before it
                    piano 🎹, for many years but I don't do it that much
                    anymore, even if I just got an Arturia Minilab MKII and I'm
                    ready to unleash some creative notes on Ableton Live.
                    Another great interest of mine is photography 📷 that,
                    combined with my passion for exploring and travelling,
                    creates a great combo. Well, check my pics out on my
                    instagram.
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
                    🇦🇹 🇸🇮 🇧🇦
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
