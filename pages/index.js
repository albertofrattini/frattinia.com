import React from 'react'

import Timeline from '../components/Timeline'

const Home = () => {
    return (
        <div className="mx-auto w-full max-w-3xl p-8">
            <h1>Hello, I am Alberto Frattini</h1>
            <p>
                I’m a developer, writer, and creator. I work at ▲Vercel as a
                Solutions Architect. You’ve found my personal slice of the
                internet – everything you want to know and more is here.
            </p>
            <br />
            <section>
                <h2>From my Blog</h2>
                <div className="card">
                    <h3>How to make something happen</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
                <div className="card">
                    <h3>How to make something happen</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
                <div className="card">
                    <h3>How to make something happen</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
            </section>
            <br />
            <section>
                <h2>Projects</h2>
                <div className="border-card">
                    <h3>📚 Libreggiamo</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
                <div className="border-card">
                    <h3>⚽ Fantacalcio</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
                <div className="border-card">
                    <h3>😊 Emozionalmente</h3>
                    <p>
                        I’m a developer, writer, and creator. I work at ▲Vercel
                        as a Solutions Architect. You’ve found my personal slice
                        of the internet – everything you want to know and more
                        is here.
                    </p>
                </div>
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
