import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <Link href="/">
                <a className="text-center bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">
                    <FontAwesomeIcon icon={faHome} className="text-gray-800" />
                </a>
            </Link>
            <div className="flex">
                <Link href="/blog">
                    <a className="header-link md:py-2 md:px-4">/blog</a>
                </Link>
                <Link href="/about">
                    <a className="header-link md:py-2 md:px-4">/about</a>
                </Link>
            </div>
        </header>
    )
}

export default Header
