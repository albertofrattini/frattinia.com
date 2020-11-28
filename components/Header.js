import React from 'react'
import Link from 'next/link'

const Header = ({ title, subtitle }) => {
    const linkClass =
        'whitespace-pre p-2 mr-3 last:pr-6 md:mr-6 font-mono font-thin text-black text-base leading-thin rounded hover:bg-gray-200'

    return (
        <>
            {title && subtitle && (
                <header>
                    <div className="bg-primary">
                        <div className="max-w-5xl min-h-header h-full mx-auto px-6 py-10 flex flex-col justify-end relative">
                            <a
                                href="#contacts"
                                className="absolute top-0 right-0 mt-4 mr-4 border border-fosforescent rounded text-fosforescent px-4 py-2"
                            >
                                Say hi! 👋
                            </a>
                            <h1 className="mt-8 text-white leading-tight mb-2 font-typewriter text-4xl md:text-5xl">
                                {title}
                            </h1>
                            <p className="m-0 text-white leading-normal max-w-xl">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </header>
            )}
            <div className="z-10 bg-white shadow sticky top-0 relative">
                <div className="top-0 right-0 bottom-0 w-4 absolute bg-gradient-to-l from-white"></div>
                <div className="flex px-4 py-2 max-w-5xl mx-auto overflow-x-auto">
                    <Link href="/">
                        <a className={linkClass}>🏠 Home</a>
                    </Link>
                    <Link href="/blog">
                        <a className={linkClass}>✍🏼 Blog</a>
                    </Link>
                    <Link href="/about">
                        <a className={linkClass}>👨🏻‍💻 About Me</a>
                    </Link>
                    <Link href="/photos">
                        <a className={linkClass}>📷 Photos</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
