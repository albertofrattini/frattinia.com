import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const linkClass =
        'p-2 font-body text-black md:mx-2 rounded hover:bg-gray-200'

    return (
        <header className="z-10 fixed top-0 left-0 right-0 flex justify-between mx-auto w-full max-w-4xl py-12 px-8 bg-white bg-opacity-99">
            <Link href="/">
                <a className="h-10">
                    <Image
                        height="40"
                        width="40"
                        quality="100"
                        src="/images/logo-black.png"
                    />
                </a>
            </Link>
            <div className="flex">
                <Link href="/blog">
                    <a className={linkClass}>✍🏼 Blog</a>
                </Link>
                <Link href="/about">
                    <a className={linkClass}>👨🏻‍💻 About Me</a>
                </Link>
            </div>
        </header>
    )
}

export default Header
