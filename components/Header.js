import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between mx-auto w-full max-w-4xl p-8 flex bg-white bg-opacity-99">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded">
                &Oslash;
            </div>
            <div className="flex">
                <Link href="/">
                    <a className="p-4 font-mono text-gray-900">/home</a>
                </Link>
                <Link href="/blog">
                    <a className="p-4 font-mono text-gray-900">/blog</a>
                </Link>
                <Link href="/about">
                    <a className="p-4 font-mono text-gray-900">/about</a>
                </Link>
            </div>
        </header>
    )
}

export default Header
