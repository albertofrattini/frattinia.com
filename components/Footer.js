import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer className="flex justify-between mx-auto mt-12 w-full max-w-sm px-8 pt-8 pb-16 bg-white">
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded border-gray-200"
                href="https://github.com/albifrattini"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded"
                href="https://www.facebook.com/frattini.alberto/"
            >
                <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded"
                href="https://www.instagram.com/albi_frattini/"
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded"
                href="https://www.linkedin.com/in/alberto-frattini-99758b151/"
            >
                <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded"
                href="https://twitter.com/albertofrattini"
            >
                <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
            <a
                className="py-2 px-3 hover:bg-gray-200 rounded"
                href="mailto:frattini.alberto@gmail.com"
            >
                <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="text-gray-800"
                    size="lg"
                />
            </a>
        </footer>
    )
}

export default Footer
